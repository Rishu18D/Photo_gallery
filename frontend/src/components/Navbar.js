import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Home, PhotoCamera, Info, Explore } from '@mui/icons-material';

const Navbar = () => {
    return (
        <AppBar position="fixed" color="primary" elevation={0} sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Toolbar className="container mx-auto flex justify-between items-center">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Gallery
                </Typography>
                <div className="flex space-x-4">
                    <Button
                        component={Link}
                        to="/"
                        startIcon={<Home />}
                        color="inherit"
                        sx={{ color: 'white', '&:hover': { color: 'gray.200' } }}
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to="/explore"
                        startIcon={<Explore />}
                        color="inherit"
                        sx={{ color: 'white', '&:hover': { color: 'gray.200' } }}
                    >
                        Explore
                    </Button>
                    <Button
                        component={Link}
                        to="/photo-upload"
                        startIcon={<PhotoCamera />}
                        color="inherit"
                        sx={{ color: 'white', '&:hover': { color: 'gray.200' } }}
                    >
                        Upload Photo
                    </Button>
                    <Button
                        component={Link}
                        to="/about-us"
                        startIcon={<Info />}
                        color="inherit"
                        sx={{ color: 'white', '&:hover': { color: 'gray.200' } }}
                    >
                        About Us
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
