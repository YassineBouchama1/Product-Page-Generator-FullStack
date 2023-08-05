
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const URL = process.env.BASE_URL
const productSchema = mongoose.Schema({



    title: {
        type: String,
        required: [true, "title Require"],
        // unique: true,

        minlength: [3, 'to short product title'],
        maxlength: [100, 'to long product title'],
    },

    // bring user id from db  {who did this action}
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
    },
    slug: {
        type: String,
        lowercase: true
    },
    description: {
        type: String,
        required: [true, ' product Description is required'],
        minlength: [20, ' to shot product description']
    },
    seo: {
        type: String,
        required: [true, ' product seo Description is required'],
        maxlength: [100, ' to shot product seo description']
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required']

    },
    sold: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        trim: true,
        max: [200000, 'to long product price']
    },


    colors: [String],
    size: [String],

    images: {
        type: [String],
        required: [true, 'images cover is required']

    },



},

    {
        timestamps: true, // to enable virtual populate
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    })





const setImageUrl = (doc) => {

    if (doc.images) {
        // also we can use foreach
        // eslint-disable-next-line array-callback-return
        doc.images.map((img, index) => {

            const imageUrl = `${URL}products/${img}`
            doc.images[index] = imageUrl
        })

    }
}

productSchema.post('init', (doc) => {
    setImageUrl(doc)

});

productSchema.post('save', (doc) => {
    setImageUrl(doc)

});



const productModel = mongoose.model('Products', productSchema)

module.exports = productModel