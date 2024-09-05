import React, { useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';

const ImageUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleUpload = async (e) => {
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            try {
                await onUpload(formData);
                setMessage('Image uploaded successfully!');
            } catch (error) {
                setMessage('Failed to upload image.');
            }
        }
    };

    return (
        <Box className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
            <Typography variant="h6" component="h2" className="mb-4">
                Upload Your Image
            </Typography>
            <form onSubmit={handleUpload} className="flex flex-col gap-4">
                <TextField
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    fullWidth
                    InputProps={{ sx: { padding: '8px' } }}
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                    size="large"
                >
                    Upload Image
                </Button>
            </form>
            {message && <Typography variant="body2" color="textSecondary" className="mt-4">{message}</Typography>}
        </Box>
    );
};

export default ImageUpload;
