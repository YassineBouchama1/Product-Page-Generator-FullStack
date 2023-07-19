

const express = require("express")

const router = express.Router()
const { imageUploader, CreateImagesToStock, deleteimage, getOneImage, getAllImages, resizeImage }
    = require('../controller/uploaderController')


const AuthService = require('../controller/authController')
const { createImagesValidator, DeletImagesValidator, GetOneImagesValidator } = require("../utils/validators/UploaderValidator")



router.route('/')
    .post(AuthService.protect, imageUploader, resizeImage, createImagesValidator, CreateImagesToStock)


    .get(AuthService.protect, getAllImages)


router.route('/:id')

    .delete(AuthService.protect, DeletImagesValidator, deleteimage)
    .get(GetOneImagesValidator, getOneImage)

module.exports = router