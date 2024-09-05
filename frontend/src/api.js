// src/api.js

export const fetchImages = async () => {
    const response = await fetch('http://localhost:8080/api/images/all');
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    return await response.json();
};

export const uploadImage = async (formData) => {
    const response = await fetch('http://localhost:8080/api/images/upload', {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        throw new Error('Failed to upload image');
    }
    return await response.json();
};

export const deleteImage = async (imageId) => {
    const response = await fetch(`http://localhost:8080/api/images/${imageId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete image');
    }
    return await response.json();
};
