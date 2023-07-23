const expressAsyncHandler = require('express-async-handler')

const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const ApiError = require('../utils/ApiError');
const factory = require('./handlersFactory')




// @desc    get Task to todolist
// @route   GET /api/v1/admincontrole
// @access  Private/admin
exports.getAllUsers = factory.getAll(userModel)





// @desc    Delete specific category
// @route   DELETE /api/v1/Prodcuts/:id
// @access    Protected/Admin
exports.deleteUser = factory.deleteOne(userModel)

// @desc    Get specific category
// @route   GET /api/v1/Prodcuts/:id
// @access    Protected/Admin/user
exports.getuserById = factory.getOne(userModel)




// @desc    Get Logged user data
// @route   GET /api/v1/users/getMe
// @access  Private/Protect
exports.getLoggedUserData = expressAsyncHandler(async (req, res, next) => {
    req.params.id = req.user._id;
    next();
});



// @desc    Get Logged user data
// @route   GET /api/v1/users/getMe
// @access  user

exports.updateLoggedUserPassword = expressAsyncHandler(async (req, res, next) => {
    // 1) Update user password based user payload (req.user._id)
    const user = await userModel.findByIdAndUpdate(
        req.user._id,
        {
            password: await bcrypt.hash(req.body.password, 12),
            passwordChangedAt: Date.now(),
        },
        {
            new: true,
        }
    );

    // 2) Generate token
    const token = createToken(user._id);

    res.status(200).json({ data: user, token });
});





// @desc    update only passowrd
// @route   update /changepassowrd/:id
// @access  admin

exports.changeUserPassword = expressAsyncHandler(async (req, res, next) => {
    const user = await userModel.findByIdAndUpdate(
        req.params.id,
        {
            password: await bcrypt.hash(req.body.password, 12),
            passwordChangedAt: Date.now(),
        },
        {
            new: true,
        }
    );

    if (!user) {
        return next(new ApiError(`No user for this id ${req.params.id}`, 404));
    }
    res.status(200).json({ data: user });
});




