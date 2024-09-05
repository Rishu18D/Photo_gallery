import React, { useState } from 'react';
import Camera from '../components/Camera';
import ImageUpload from '../components/ImageUpload';
import { uploadImage } from '../api';
import { Button, Typography, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

const PhotoUpload = () => {
    const [message, setMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleUpload = async (formData) => {
        try {
            await uploadImage(formData);
            setMessage('Image uploaded successfully!');
            setOpenSnackbar(true);
        } catch (error) {
            setMessage('Failed to upload image.');
            setOpenSnackbar(true);
        }
    };

    const handleCapture = async (blob) => {
        const formData = new FormData();
        formData.append('image', blob);
        try {
            await uploadImage(formData);
            setMessage('Image uploaded successfully!');
            setOpenSnackbar(true);
        } catch (error) {
            setMessage('Failed to upload image.');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
            <Typography variant="h4" component="h1" className="font-bold mb-8 text-gray-800">
                Upload Photo
            </Typography>
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <Camera onCapture={handleCapture} />
                <div className="my-6">
                    <ImageUpload onUpload={handleUpload} />
                </div>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    action={
                        <Button color="inherit" onClick={handleCloseSnackbar}>
                            Close
                        </Button>
                    }
                >
                    <Alert onClose={handleCloseSnackbar} severity={message.includes('successfully') ? 'success' : 'error'}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
};

export default PhotoUpload;
