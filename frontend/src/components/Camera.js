import React, { useRef, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const Camera = ({ onCapture }) => {
    const videoRef = useRef(null);
    const [cameraActive, setCameraActive] = useState(false);

    const startCamera = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        setCameraActive(true);
    };

    const stopCamera = () => {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
        setCameraActive(false);
    };

    const capturePhoto = () => {
        const canvas = document.createElement('canvas');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(blob => {
            onCapture(blob);
            stopCamera();
        }, 'image/jpeg');
    };

    return (
        <Box className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
            <Typography variant="h6" component="h2" className="mb-4">
                Capture a Photo
            </Typography>
            <video ref={videoRef} autoPlay className={`w-full h-auto rounded-lg mb-4 ${cameraActive ? 'block' : 'hidden'}`}></video>
            {!cameraActive && <Button variant="contained" color="primary" onClick={startCamera} size="large" className="mb-2">Start Camera</Button>}
            {cameraActive && (
                <>
                    <Button variant="contained" color="secondary" onClick={capturePhoto} size="large" className="mb-2">Capture Photo</Button>
                    <Button variant="outlined" color="error" onClick={stopCamera} size="large">Stop Camera</Button>
                </>
            )}
        </Box>
    );
};

export default Camera;
