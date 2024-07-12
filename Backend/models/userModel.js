const mongoose = require('mongoose')


const userSchema = mongoose.Schema({

    nameStore: {
        type: String,
        required: [true, "hello@hello.com required"],
        uniqe: true,
        lowercase: true,
        trim: true,

    },
    email: {
        type: String,
        required: [true, 'email required'],
        lowercase: true,
        uniqe: true,
    },
    password: {
        type: String,
        required: [true, "passowrd requierd"],
        minlegth: [6, 'to short password'],

    },

    passwordChangedAt: Date,
    credit: {
        type: Number,
        default: 5
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
}, { timestamps: true })


const userModel = mongoose.model('Users', userSchema)

module.exports = userModel