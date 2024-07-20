
const expressAsyncHandler = require('express-async-handler')
const Product = require('../models/productModel');
const ApiError = require('../utils/ApiError');
const factory = require('./handlersFactory')
const sharp = require('sharp');
const { uploadSingleImage } = require('../middleWares/uploadImageMiddleWar');
const ApiFeatures = require('../utils/apiFeatures');
const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');
const userModel = require('../models/userModel');






// @desc Resize Image That user input
exports.resizeImage = expressAsyncHandler(async (req, res, next) => {
    const fileName = `${req.user.nameStore}-${Date.now()} - ${Math.round(Math.random() * 1E9)}.png`;

    if (req.file) {
        await sharp(req.file.buffer)
            .resize(900, 900)
            .toFormat('png')
            .png({ quality: 90 })
            .toFile(`uploads/products/${fileName}`);
        req.body.image = fileName;
    }

    next();
});

//@Desc MiddleWare using multer to upload image to server
exports.imageUploaderProduct = uploadSingleImage('image');



// @desc    Create Products with user id
// @route   POST /api/v1/Products
// @access  Private/User
exports.CreateProduct = expressAsyncHandler(async (req, res, next) => {



    // check if user exist
    if (!req.user) {
        return next(
            new ApiError(`There is no user Logged`, 404)
        );
    }
    try {

        // get number of all Products that user created
        const Products = await Product.find({ user: req.user._id })


        // check if user rich limit to create product
        if (Products.length >= req.user.credit) {
            return next(
                new ApiError(`لا يمكنك إنشاء المزيد من المنتجات، لقد وصلت إلى الحد الأقصى الخاص بك`, 404)
            );
        }



        req.body.user = await req.user._id;

        const newProduct = await Product.create(req.body);
        if (newProduct) {
            const user = await userModel.findById(req.user._id)
            user.credit -= 1
            await user.save();
        }

        //1) filter Product by userid{get only Product belong this userID}
        // const AllProducts = await Product.find({ user: req.user._id })
        // document.save()
        res.status(200).json({ status: true })


    } catch (error) {
        return next(new ApiError(`Error Creating Product: ${error.message}`, 500));
    }


})




// @desc    get Product by id user
// @route   GET /api/v1/list
// @access  Private/User
exports.getAllProduct = expressAsyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterObj) {
        filter = req.filterObj;
    }


    try {
        // Build query
        const documentsCounts = await Product.countDocuments();

        const apiFeatures = new ApiFeatures(Product.find({ user: req.user._id }, filter), req.query,)
            .paginate(documentsCounts)
            .filter()

            .sort();

        // Execute query
        const { mongooseQuery, paginationResult } = apiFeatures;
        const files = await mongooseQuery;

        res.status(200)
            .json({ results: files.length, paginationResult, data: files });



    } catch (error) {
        return next(new ApiError(`Error Updating Product: ${error.message}`, 500));
    }

})





exports.updateProduct = factory.updateOne(Product)

// @desc    Delete specific category
// @route   DELETE /api/v1/Prodcuts/:id
// @access    Protected/Admin
// exports.deleteProduct = factory.deleteOne(Product)
exports.deleteProduct = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id)

    const result = await orderModel.deleteMany({ 'cartItems.productID': id });


    if (!product) {

        return next(new ApiError(`the is no product belong this id ${id}`, 400))
    }


    res.status(202).json({ status: true })

})

// @desc    Get specific category
// @route   GET /api/v1/Prodcuts/:id
// @access    Protected/Admin
// exports.getOneProduct = factory.getOne(Product)
exports.getOneProduct = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await productModel.findById(id)

    if (!product) {
        return next(new ApiError(`No product for this id ${id}`, 404));
    }
    const user = await userModel.findById(product.user)


    res.status(200).json({ data: product, user: user })
})