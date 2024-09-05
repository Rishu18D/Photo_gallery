import React, { useState, useEffect } from 'react';
import { Modal, Backdrop, Fade, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ExplorePage = () => {
    const [photos, setPhotos] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // Fetch photos from Pixabay API
    useEffect(() => {
        const fetchPhotos = async () => {
            const apiKey = '44424785-1d818f5a568192e6301d48d61';
            const url = `https://pixabay.com/api/?key=${apiKey}&q=animals+nature+landscape+wallpaper&image_type=photo&per_page=200`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setPhotos(data.hits);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);

    // Handle opening the modal with the clicked image
    const handleOpen = (photo) => {
        setSelectedPhoto(photo);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedPhoto(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Typography variant="h4" className="text-center text-indigo-600 font-bold mb-10">
                Explore Beautiful Photos
            </Typography>
            <Grid container spacing={4} className="justify-center">
                {photos.map((photo) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                        <motion.img
                            src={photo.webformatURL}
                            alt={photo.tags}
                            className="w-full h-60 object-cover rounded-lg shadow-lg cursor-pointer"
                            onClick={() => handleOpen(photo)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* Modal to show full-size image */}
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="flex justify-center items-center min-h-screen">
                        <motion.img
                            src={selectedPhoto?.largeImageURL}
                            alt={selectedPhoto?.tags}
                            className="max-w-full max-h-screen rounded-lg shadow-xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ExplorePage;
