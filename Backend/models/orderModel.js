const mongoose = require('mongoose')



const orderSchema = mongoose.Schema({


    cartItems:
    {
        productID: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
        },
        quantity: Number,
        price: Number,
    },
    

    // cartItems: [
    //     {
    //         productID: {
    //             type: mongoose.Schema.ObjectId,
    //             ref: 'Product',
    //         },
    //         quantity: Number,
    //         price: Number,
    //     },
    // ],


    shippingAddress: {
    name: String,
    address: String,
    phone: String,
    city: String,

},
    isDelivered: {
    type: Boolean,
    default: false,
},
    isShipped: {
    type: Boolean,
    default: false,
},
    totalOrderPrice: {
    type: Number,
},
    user: {
    type: mongoose.Schema.ObjectId,
    ref: 'Users',
},
}
    ,
{
    timestamps: {
        createdAt: 'created_at', // Use `created_at` to store the created date
            updatedAt: 'updated_at' // and `updated_at` to store the last updated date
    }
}
)




module.exports = mongoose.model('Orders', orderSchema);