const expressAsyncHandler = require('express-async-handler')
const OrderModel = require('../models/orderModel')
const Product = require('../models/productModel')
const factory = require('./handlersFactory')
const ApiError = require('../utils/ApiError')
const ApiFeatures = require('../utils/apiFeatures')



// @DESC Create Order
// @ROUTE GET /API/V1/order
// @DACCESS Poulic
exports.CreateOrder = expressAsyncHandler(async (req, res, next) => {


    const { productID, quantity, price } = req.body.cartItems;
    const { shippingAddress, totalOrderPrice, user } = req.body;
    console.log(quantity)
    // 1- Create Order
    const newOrder = await OrderModel.create({
        cartItems: {
            productID,
            quantity,
            price
        },
        shippingAddress,
        totalOrderPrice,
        user: user
    });

    // 2- After creating order, decrement product quantity, increment product sold
    if (newOrder) {
        await Product.findByIdAndUpdate(product, {
            $inc: { quantity: -quantity, sold: quantity }
        });
    }

    res.status(201).json({ status: true });
});




// @desc    Get All category
// @route   GET /api/v1/Prodcuts/:id
// @access    Protected/Admin
exports.getAllPOrders = expressAsyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterObj) {
        filter = req.filterObj;
    }


    console.log(req.user._id)
    // Build query
    const documentsCounts = await Product.countDocuments();

    const apiFeatures = new ApiFeatures(OrderModel.find({ user: req.user._id }, filter), req.query,)
        .paginate(documentsCounts)
        .filter()

        .sort();

    // Execute query
    const { mongooseQuery, paginationResult } = apiFeatures;
    const files = await mongooseQuery;

    res.status(200)
        .json({ results: files.length, paginationResult, data: files });
    //1) filter order by userid{get only order belong this userID}
    // const Orders = await OrderModel.find({ user: req.user._id })


    // if (!Orders) {
    //     return next(
    //         new ApiError(`There is no Product for this user id : ${req.user._id}`, 404)
    //     );
    // }

    // res.status(200).json({
    //     status: 'success',
    //     result: Orders.length,
    //     data: Orders,
    // });
})








// @desc    Update order  status
// @route   PUT /api/v1/orders/:id/status
// @access  Protected/Admin
exports.updateStatus = expressAsyncHandler(async (req, res, next) => {


    console.log(req.body)
    //1) get order from db by id
    const order = await OrderModel.findById(req.params.id)

    if (!order) {
        return next(new ApiError(`there is no Order belong this id ${req.params.id}`, 400))

    }

    //2) Update is Deleverd
    order.status = req.body.status


    const UpdatedOrder = await order.save();

    res.status(200).json({ status: true, })
})





// @desc    Get specific Order
// @route   GET /api/v1/Order/:id
// @access    Protected/Admin
exports.getOneOrder = factory.getOne(OrderModel)



// @desc    Delete specific Order
// @route   DELETE /api/v1/Order/:id
// @access    Protected/Admin
exports.deleteOrder = factory.deleteOne(OrderModel)