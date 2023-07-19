const { check, body } = require('express-validator');
const validationMiddleWare = require('../../middleWares/validatorMiddleWare')

exports.createImagesValidator = [

    check('image').notEmpty().withMessage("image is required from validator express")



    , validationMiddleWare
]




exports.DeletImagesValidator = [
    check('id').isMongoId()
        .withMessage('Invalid image id format')


    , validationMiddleWare
]

exports.GetOneImagesValidator = [
    check('id').isMongoId()
        .withMessage('Invalid image id format')


    , validationMiddleWare
]