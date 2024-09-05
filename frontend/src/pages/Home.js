import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, Grid, Paper, Pagination } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { fetchImages, deleteImage } from '../api';

const Home = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 12; // Number of images per page

    useEffect(() => {
        const loadImages = async () => {
            try {
                const response = await fetchImages();
                setImages(response);
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };
        loadImages();
    }, []);

    const handleDelete = async (imageId) => {
        try {
            if (imageId) {
                await deleteImage(imageId);
                setImages(images.filter(img => img.public_id !== imageId));
            } else {
                console.error('No image ID provided');
            }
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    // Pagination logic
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    const totalPages = Math.ceil(images.length / imagesPerPage);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 flex flex-col items-center">
            <Paper elevation={6} className="w-full max-w-6xl p-8 bg-white rounded-lg shadow-lg">
                <Typography variant="h3" component="h1" align="center" className="font-extrabold text-gray-900 mb-6">
                    Photo Gallery
                </Typography>
                <Grid container spacing={2} className="justify-center">
                    {currentImages.map((image) => (
                        <Grid item xs={2} sm={2} md={1} lg={1} key={image.public_id}>
                            <Paper className="p-1 bg-white rounded-sm shadow-sm cursor-pointer overflow-hidden">
                                <img
                                    src={image.secure_url}
                                    alt="gallery"
                                    className="w-12 h-12 object-cover rounded-sm"
                                    onClick={() => handleImageClick(image)}
                                />
                                <Button
                                    variant="outlined"
                                    color="error"
                                    fullWidth
                                    onClick={(e) => { e.stopPropagation(); handleDelete(image.public_id); }}
                                    className="mt-1 text-xs"
                                >
                                    Delete
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                {totalPages > 1 && (
                    <div className="mt-4 flex justify-center">
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={(event, value) => setCurrentPage(value)}
                            color="primary"
                        />
                    </div>
                )}
            </Paper>

            <Dialog
                open={!!selectedImage}
                onClose={closeModal}
                maxWidth="lg"
                fullWidth
                sx={{ '.MuiDialog-paper': { borderRadius: '16px', overflow: 'hidden' } }}
            >
                <DialogTitle>
                    <div className="flex justify-between items-center">
                        <Typography variant="h6" component="span" className="font-semibold text-gray-800">
                            Image Preview
                        </Typography>
                        <IconButton edge="end" color="inherit" onClick={closeModal} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <img
                        src={selectedImage?.secure_url}
                        alt="Full Size"
                        className="w-full h-auto max-h-[80vh] object-cover rounded-lg border border-gray-200 shadow-md"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} variant="contained" color="primary" sx={{ borderRadius: '8px' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Home;
