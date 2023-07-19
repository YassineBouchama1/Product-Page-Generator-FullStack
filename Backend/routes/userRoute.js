const express = require('express')

const router = express.Router()
const AuthService = require('../controller/authController')
const { getLoggedUserData, getuserById, updateLoggedUserPassword, getAllUsers, changeUserPassword, deleteUser } = require('../controller/userController');


//@access  : User
//user play with his infromation
router.get('/getMe', AuthService.protect, getLoggedUserData, getuserById)
router.put('/changeMyPassword', AuthService.protect, updateLoggedUserPassword);



//@access  : admin
//admin play with dacounts users
router.put('/changePassword/:', AuthService.protect, changeUserPassword);
router.route('/')
    .get(AuthService.protect, AuthService.allowedTo('admin', "manager"), getAllUsers)
router.route('/:id')
    .delete(AuthService.protect, AuthService.allowedTo('admin', 'manager'), deleteUser)
    .get(AuthService.protect, getuserById)


module.exports = router