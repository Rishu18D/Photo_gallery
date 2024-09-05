// routes/imageRoutes.js
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middleware/uploadMiddleware');
const imageController = require('../controllers/imageController');

// Endpoint to upload an image
router.post('/upload', uploadMiddleware.single('image'), imageController.uploadImage);

// Endpoint to get all images from Cloudinary
router.get('/all', imageController.getAllImages);

// Endpoint to delete an image from Cloudinary
router.delete('/:imageId', imageController.deleteImage);

module.exports = router;
