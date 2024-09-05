// src/api.js

export const fetchImages = async () => {
    const response = await fetch('https://photo-gallery-backend-t5vk.onrender.com/api/images/all');
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    return await response.json();
};

export const uploadImage = async (formData) => {
    const response = await fetch('https://photo-gallery-backend-t5vk.onrender.com/api/images/upload', {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        throw new Error('Failed to upload image');
    }
    return await response.json();
};

export const deleteImage = async (imageId) => {
    const response = await fetch(`https://photo-gallery-backend-t5vk.onrender.com/api/images/${imageId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete image');
    }
    return await response.json();
};
