import React from 'react';
import { Card, CardMedia, CardContent, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageGallery = ({ images, onDelete, onImageClick }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-center">
            {images.length === 0 && (
                <div className="col-span-full text-center text-gray-500">
                    No images available
                </div>
            )}
            {images.map(image => (
                <Card
                    key={image.public_id}
                    className="w-12 h-12 flex flex-col items-center shadow-sm rounded-sm overflow-hidden cursor-pointer"
                    onClick={() => onImageClick(image)}
                >
                    <CardMedia
                        component="img"
                        image={image.secure_url}
                        alt="gallery"
                        className="w-full h-12 object-cover"
                    />
                    <CardContent className="relative w-full flex flex-col items-center p-1">
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent the delete button click from triggering the image click
                                onDelete(image.public_id);
                            }}
                            className="absolute top-1 right-1 text-red-500 hover:text-red-700"
                        >
                            <DeleteIcon />
                        </IconButton>
                        <Typography variant="caption" color="textSecondary" className="text-center mt-1 w-full text-xs">
                            Image {image.public_id}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ImageGallery;
