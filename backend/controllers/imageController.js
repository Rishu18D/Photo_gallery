const cloudinary = require('../config/cloudinaryConfig');
const axios = require('axios');

const uploadImage = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        res.json({ imageUrl: result.secure_url });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'Error uploading image' });
    }
};

const getAllImages = async (req, res) => {
    try {
        const response = await axios.get(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
            auth: {
                username: process.env.CLOUDINARY_API_KEY,
                password: process.env.CLOUDINARY_API_SECRET
            }
        });
        res.json(response.data.resources);
    } catch (error) {
        console.error('Error fetching images from Cloudinary:', error);
        res.status(500).json({ error: 'Failed to fetch images from Cloudinary' });
    }
};


const deleteImage = async (req, res) => {
    const { imageId } = req.params;

    try {
        if (!imageId) {
            return res.status(400).json({ error: 'Image ID is required' });
        }

        const response = await cloudinary.uploader.destroy(imageId);
        if (response.result === 'ok') {
            res.json({ message: 'Image deleted successfully' });
        } else {
            throw new Error('Failed to delete image');
        }
    } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
        res.status(500).json({ error: 'Failed to delete image from Cloudinary' });
    }
};
module.exports = {
    uploadImage,
    getAllImages,
    deleteImage,
};
