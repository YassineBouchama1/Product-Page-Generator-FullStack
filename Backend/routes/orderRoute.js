const express = require('express')
const { CreateOrder, getAllPOrders, updateIsDelivered, deleteOrder, getOneOrder, updateIsShipped } = require('../controller/orderController')
const router = express.Router()

const AuthService = require('../controller/authController')


router.route('/')
    .post(AuthService.protect, CreateOrder)
    .get(AuthService.protect, getAllPOrders)


router.route('/:id')



    .delete(AuthService.protect, deleteOrder)
    .get(AuthService.protect, getOneOrder)
router.put('/:id/delivereed', AuthService.protect, updateIsDelivered)

router.put('/:id/shipped', AuthService.protect, updateIsShipped)



module.exports = router