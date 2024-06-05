// Function to handle image upload from file input
document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('image', document.getElementById('fileInput').files[0]);

    try {
        const response = await fetch('http://localhost:8080/api/images/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        console.log('Image uploaded successfully');
        
        // Fetch all images after successful upload
        fetchImagesFromServer();
    } catch (error) {
        console.error('Error uploading image:', error);
    }
});

// Function to fetch images from the server
async function fetchImagesFromServer() {
    try {
        const response = await fetch('http://localhost:8080/api/images/all');

        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }

        const images = await response.json();
        console.log('Fetched images:', images);

        const gallery = document.getElementById('imageGallery');
        gallery.innerHTML = '';

        images.forEach(image => {
            addImageToGallery(image.secure_url, image.public_id);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

// Function to add image to gallery
function addImageToGallery(imageUrl, imageId) {
    const gallery = document.getElementById('imageGallery');
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-container';
    const imgLink = document.createElement('a');
    imgLink.href = imageUrl;
    imgLink.target = '_blank'; // Open in a new tab
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Uploaded Image';
    imgElement.className = 'gallery-image';
    imgLink.appendChild(imgElement);
    imgContainer.appendChild(imgLink);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', () => {
        deleteImage(imageId);
    });
    imgContainer.appendChild(deleteButton);

    gallery.appendChild(imgContainer);
}

// Function to delete an image
async function deleteImage(imageId) {
    try {
        const response = await fetch(`http://localhost:8080/api/images/${imageId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete image');
        }

        console.log('Image deleted successfully');

        // Refresh gallery after deletion
        fetchImagesFromServer();
    } catch (error) {
        console.error('Error deleting image:', error);
    }
}

let cameraStream = null;

// Function to initialize the camera and capture photo
async function startCamera() {
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('camera');
        video.srcObject = cameraStream;

        document.getElementById('cameraContainer').style.display = 'block';
        document.getElementById('startCameraButton').style.display = 'none';
    } catch (error) {
        console.error('Error accessing camera:', error);
    }
}

// Function to capture and upload photo
async function capturePhoto() {
    const video = document.getElementById('camera');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(async (blob) => {
        await uploadCapturedPhoto(blob);
        stopCamera();
    }, 'image/jpeg');
}

// Function to stop the camera
function stopCamera() {
    const video = document.getElementById('camera');
    const tracks = video.srcObject.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;

    document.getElementById('cameraContainer').style.display = 'none';
    document.getElementById('startCameraButton').style.display = 'block';
}

// Function to upload captured photo
async function uploadCapturedPhoto(blob) {
    const formData = new FormData();
    formData.append('image', blob);

    try {
        const response = await fetch('http://localhost:8080/api/images/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to upload captured image');
        }

        console.log('Captured image uploaded successfully');
        
        // Fetch all images after successful upload
        fetchImagesFromServer();
    } catch (error) {
        console.error('Error uploading captured image:', error);
    }
}

// Event listeners
document.getElementById('startCameraButton').addEventListener('click', startCamera);
document.getElementById('captureButton').addEventListener('click', capturePhoto);

// Fetch images when the page loads
window.onload = fetchImagesFromServer;
