import React from 'react';
import { Typography, Paper, Divider, Button, Avatar } from '@mui/material';
import { GitHub, Email, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center p-6">
            <Paper
                elevation={5}
                className="w-full max-w-4xl p-10 bg-white rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
            >
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" component="h1" className="font-extrabold text-indigo-600 mb-6 text-center">
                        About Us
                    </Typography>
                    <Divider className="mb-6" />

                    <Typography variant="body1" className="text-gray-600 text-lg leading-relaxed mb-6">
                        We are a modern photo gallery service, helping you manage and showcase your images with ease.
                        Our platform is designed to offer a seamless and intuitive experience for users who want to
                        organize, view, and share their photos effortlessly. Whether you are a professional photographer
                        or just someone who loves taking pictures, we provide the tools you need to make the most of your
                        photo collection.
                    </Typography>

                    <Typography variant="h4" component="h2" className="font-bold text-indigo-500 mb-6 text-center">
                        Creator
                    </Typography>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <Avatar
                            alt="Rishu Singh"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zEYtv1PeCydIAyqts3tne8K8602XUo7-Vg&s/150" // Replace with your image URL
                            className="w-36 h-36 mb-4 shadow-lg"
                        />
                        <Typography variant="h5" className="font-bold text-gray-800 mb-2">
                            Rishu Singh
                        </Typography>
                        <Typography variant="body1" className="text-gray-600 mb-4 text-center max-w-xl">
                            Motivated MERN Stack Developer with hands-on experience in developing web applications using
                            React, Node.js, Express.js, and MongoDB. Proficient in JavaScript, RESTful API integration,
                            and version control with Git. Demonstrated ability to design user-friendly web applications
                            through academic projects and training.
                        </Typography>

                        <div className="flex justify-center space-x-6 mb-6">
                            <Button
                                startIcon={<GitHub />}
                                variant="outlined"
                                color="primary"
                                href="https://github.com/Rishu18D"
                                target="_blank"
                                className="hover:bg-indigo-500 hover:text-white"
                            >
                                GitHub
                            </Button>
                            <Button
                                startIcon={<Email />}
                                variant="outlined"
                                color="secondary"
                                href="mailto:rishusinghmorals@gmail.com"
                                className="hover:bg-pink-500 hover:text-white"
                            >
                                Email
                            </Button>
                            <Button
                                startIcon={<Phone />}
                                variant="outlined"
                                href="tel:+919026665674"
                                className="hover:bg-green-500 hover:text-white"
                            >
                                Phone
                            </Button>
                            <Button
                                startIcon={<LocationOn />}
                                variant="outlined"
                                href="https://goo.gl/maps/xyz"
                                target="_blank"
                                className="hover:bg-yellow-500 hover:text-white"
                            >
                                Location
                            </Button>
                        </div>
                    </motion.div>

                    <Divider className="mb-6" />

                    <Typography variant="h5" component="h3" className="font-semibold text-indigo-500 mb-6 text-center">
                        Professional Background
                    </Typography>

                    <div className="space-y-6 text-gray-700">
                        <Typography variant="body1">
                            <strong>Education:</strong> Bachelor of Computer Applications (BCA) - Data Science & Artificial
                            Intelligence, BBD University, Lucknow (Expected Graduation: June 2024)
                        </Typography>
                        <Typography variant="body1">
                            <strong>Skills:</strong> C, Java, Python, JavaScript, HTML, CSS, MongoDB, MySQL, React.js, Node.js,
                            Express.js, Bootstrap, Material-UI, Tailwind, MERN Stack Development, RESTful API Integration,
                            Git, GitHub, Firebase, Render, Data Structures & Algorithms
                        </Typography>
                        <Typography variant="body1">
                            <strong>Projects:</strong>
                        </Typography>
                        <ul className="list-disc list-inside pl-4">
                            <li>
                                <strong>E-Commerce Clothing and Attire Website</strong> – Developed product catalog with
                                advanced search and filtering functionalities, and integrated Stripe API for secure payments.
                            </li>
                            <li>
                                <strong>MERN Photo Gallery Website</strong> – Implemented Cloudinary integration for image
                                uploads and managed efficient image retrieval and display using React.js.
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </Paper>
        </div>
    );
};

export default AboutUs;
