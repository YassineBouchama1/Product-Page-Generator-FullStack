const { check } = require('express-validator');
const slugify = require('slugify');

const validationMiddleWare = require('../../middleWares/validatorMiddleWare')
const User = require('../../models/userModel')



exports.createAuthalidator = [
    check('nameStore')
        .notEmpty()
        .withMessage('nameStore required')
        .isLength({ min: 3 })
        .withMessage('Too short User nameStore')
        .custom((val) =>
            User.findOne({ nameStore: val }).then((user) => {
                if (user) {
                    return Promise.reject(new Error('name already in user'));
                }
            })
        )
        .custom((val, { req }) => {
            req.body.slug = slugify(val);
            return true;
        }),

    check('email')
        .notEmpty()
        .withMessage('Email required')
        .isEmail()
        .withMessage('Invalid email address')
        .custom((val) =>
            User.findOne({ email: val }).then((user) => {
                if (user) {
                    return Promise.reject(new Error('E-mail already in user'));
                }
            })
        ),

    check('password')
        .notEmpty()
        .withMessage('Password required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters')
        .custom((password, { req }) => {
            if (password !== req.body.passwordConfirm) {
                throw new Error('Password Confirmation incorrect');
            }
            return true;
        }),

    check('passwordConfirm')
        .notEmpty()
        .withMessage('Password confirmation required'),



    validationMiddleWare,
];


exports.LoginAuthalidator = [


    check('email')
        .notEmpty()
        .withMessage('Email required')
        .isEmail()
        .withMessage('Invalid email address')

    ,
    check('password')
        .notEmpty()
        .withMessage('Password required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters')

    ,

    validationMiddleWare,
];
