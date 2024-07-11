
const expressAsyncHandler = require('express-async-handler')
const Product = require('../models/productModel');
const ApiError = require('../utils/ApiError');
const factory = require('./handlersFactory')
const sharp = require('sharp');
const { uploadMultImage, uploadSingleImage } = require('../middleWares/uploadImageMiddleWar');
const ApiFeatures = require('../utils/apiFeatures');



// // @desc Resize Image That user input
// exports.resizeImage = expressAsyncHandler(async (req, res, next) => {

//     console.log('resizeImage')

//     if (req.files?.images) {
//         req.body.images = []
//         await Promise.all(
//             req.files.images.map(async (img) => {
//                 const imageName = `PRODUCT-${req.user._id}-${Date.now()}-${Math.round(Math.random() * 1E9)}.png`

//                 await sharp(img.buffer)
//                     .resize(1000, 1000)
//                     .toFormat('png')
//                     .jpeg({ quality: 90 })
//                     .toFile(`uploads/products/${imageName}`)


//                 req.body.images.push(imageName)

//             })
//         )

//     }
//     next()
// })



// //@Desc MiddleWare using multer to upload image to server
// exports.imageUploaderProduct = uploadMultImage([


//     { name: 'images', maxCount: 5 }

// ])





// @desc Resize Image That user input
exports.resizeImage = expressAsyncHandler(async (req, res, next) => {

    const fileName = `${req.user.name}-${Date.now()}-${Math.round(Math.random() * 1E9)}.png`
    if (req.file) {

        await sharp(req.file.buffer)
            .resize(900, 900)
            .toFormat('png')
            .png({ quality: 90 })
            .toFile(`uploads/products/${fileName}`)
        req.body.image = fileName
    }
    next()
})



//@Desc MiddleWare using multer to upload image to server
exports.imageUploaderProduct = uploadSingleImage('image')



// @desc    Create Products with user id
// @route   POST /api/v1/Products
// @access  Private/User
exports.CreateProduct = expressAsyncHandler(async (req, res, next) => {


    /// bugs thata wont pass to new ariabal


    // check if user exist
    if (!req.user) {
        return next(
            new ApiError(`There is user id `, 404)
        );
    }

    // get number of all Products that user created
    const Products = await Product.find({ user: req.user._id })
    console.log(Products.length)
    console.log(req.user.credit)

    // check if user rich limit to create product
    if (Products.length >= req.user.credit) {
        return next(
            new ApiError(`You can't create more Product You rich your limit  `, 404)
        );
    }



    req.body.user = await req.user._id;

    const newProduct = await Product.create(req.body);

    //1) filter Product by userid{get only Product belong this userID}
    // const AllProducts = await Product.find({ user: req.user._id })
    // document.save()
    res.status(200).json({ data: newProduct })

})




// @desc    get Product by id user
// @route   GET /api/v1/list
// @access  Private/User
exports.getAllProduct = expressAsyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterObj) {
        filter = req.filterObj;
    }

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
    //1) filter Product by userid{get only Product belong this userID}
    // const Products = await Product.find({ user: req.user._id })


    // if (!Products) {
    //     return next(
    //         new ApiError(`There is no Product for this user id : ${req.user._id}`, 404)
    //     );
    // }

    // res.status(200).json({
    //     status: 'success',
    //     result: Products.length,
    //     data: Products,
    // });
})





exports.updateProduct = factory.updateOne(Product)

// @desc    Delete specific category
// @route   DELETE /api/v1/Prodcuts/:id
// @access    Protected/Admin
exports.deleteProduct = factory.deleteOne(Product)

// @desc    Get specific category
// @route   GET /api/v1/Prodcuts/:id
// @access    Protected/Admin
exports.getOneProduct = factory.getOne(Product)