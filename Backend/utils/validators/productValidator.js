const { check, body } = require('express-validator');
const slugify = require('slugify');
const validationMiddleWare = require('../../middleWares/validatorMiddleWare')


exports.getProductValidator = [
    check('id').isMongoId().withMessage('invalid Product id format'), validationMiddleWare
]

exports.createProductalidator = [
    check('title').notEmpty().withMessage('Product Required')
        .isLength({ min: 2 }).withMessage('must be longer then 3 letter ')
        .isLength({ max: 32 }).withMessage('must be  max 32 letters'),
    check('description').notEmpty().withMessage('description Product Required')
        .isLength({ min: 20 }).withMessage('must be short then 3 letter ')
        .isLength({ max: 2000 }).withMessage('must be longer ')
    ,
    check('price').notEmpty().withMessage('description price Required')
        .isNumeric().withMessage('price should be number')
        .isLength({ max: 200000 }).withMessage('to long product price ')

    ,
    check('image').notEmpty().withMessage('image is  Required')
    ,
    check('colors')
        .optional()
        .isArray()
        .withMessage('colors should be array of string')
    ,
    // check('images').isArray()
    //     .withMessage('images should be array of string').notEmpty().withMessage('imageCover is  Required')


    // ,


    body('title').custom((val, { req }) => {
        req.body.slug = slugify(val);
        return true;
    })

    , validationMiddleWare
]
exports.updatetProductalidator = [
    check('id').isMongoId()
        .withMessage('Invalid Product id format'),
    body('title').custom((val, { req }) => {
        req.body.slug = slugify(val);
        return true;
    })
    , validationMiddleWare
]

exports.deletetProductalidator = [
    check('id').isMongoId()
        .withMessage('Invalid Product id format')
    , validationMiddleWare
]