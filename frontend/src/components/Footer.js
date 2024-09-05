import React from 'react';
import { Typography, Box, Link, Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <Box className="container mx-auto px-4">
                <Grid container spacing={4} className="mb-8">
                    {/* About Us Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h6"
                            component="h2"
                            className="font-bold mb-2"
                        >
                            About Us
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            className="text-gray-400"
                        >
                          Our platform offers an easy way to manage and share your photo collection with friends and family.
                        </Typography>
                    </Grid>

                    {/* Contact Us Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h6"
                            component="h2"
                            className="font-bold mb-2"
                        >
                            Contact Us
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            className="text-gray-400 mb-2"
                        >
                            Email: <a href="mailto:support@photogallery.com" className="text-gray-300 hover:text-gray-100">rishusinghmorals@gmail.com</a>
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            className="text-gray-400"
                        >
                            Phone: <a href="tel:+1234567890" className="text-gray-300 hover:text-gray-100">+91 9026665674</a>
                        </Typography>
                    </Grid>

                    {/* Social Media Links */}
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h6"
                            component="h2"
                            className="font-bold mb-2"
                        >
                            Follow Us
                        </Typography>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-300">
                                <Facebook />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-300">
                                <Twitter />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-300">
                                <Instagram />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-300">
                                <LinkedIn />
                            </Link>
                        </div>
                    </Grid>
                </Grid>

                <div className="text-center">
                    <Typography
                        variant="body2"
                        component="p"
                        className="text-gray-400 mb-2"
                    >
                        © 2024 Modern Photo Gallery. All rights reserved.
                    </Typography>
                    <div className="flex justify-center space-x-6">
                        <Link href="#" color="inherit" className="text-gray-400 hover:text-gray-300 transition duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="#" color="inherit" className="text-gray-400 hover:text-gray-300 transition duration-300">
                            Terms of Service
                        </Link>
                        <Link href="#" color="inherit" className="text-gray-400 hover:text-gray-300 transition duration-300">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </Box>
        </footer>
    );
};

export default Footer;
