const mongoose = require('mongoose')
const AddUrl = require('../middleWares/addUrlImg')


const uploaderShema = mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'Users',
    },
    image: String,
},
    { timestamps: true })





const postUrl = new AddUrl(uploaderShema)

postUrl.post('storage')
postUrl.save('storage')
// postUrl.update('categories')

const uploaderModel = mongoose.model('Uploader', uploaderShema)

module.exports = uploaderModel