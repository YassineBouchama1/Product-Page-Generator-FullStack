const express = require('express')
const { CreateOrder, getAllPOrders, updateStatus, deleteOrder, getOneOrder, updateIsShipped } = require('../controller/orderController')
const router = express.Router()

const AuthService = require('../controller/authController')


router.route('/')
    .post(CreateOrder)
    .get(AuthService.protect, getAllPOrders)


router.route('/:id')



    .delete(AuthService.protect, deleteOrder)
    .get(AuthService.protect, getOneOrder)
router.put('/:id/status', AuthService.protect, updateStatus)





module.exports = router