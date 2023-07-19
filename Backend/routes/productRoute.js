const express = require('express')
const { CreateProduct, resizeImage, imageUploaderProduct, updateProduct, deleteProduct, getAllProduct, getOneProduct } = require('../controller/productController')
const router = express.Router()
const AuthService = require('../controller/authController')
const { getLoggedUserData } = require('../controller/userController')
const { createProductalidator } = require('../utils/validators/productValidator')
const { getOne } = require('../controller/handlersFactory')




//@access  : Private/User
router.route('/')

    .post(AuthService.protect, imageUploaderProduct, resizeImage, createProductalidator, CreateProduct)
    .get(AuthService.protect, getAllProduct)

router.route('/:id')
    .put(AuthService.protect, imageUploaderProduct, resizeImage, updateProduct)
    .delete(AuthService.protect, deleteProduct)

    //@access  : Pouplic
    .get(getOneProduct)


module.exports = router