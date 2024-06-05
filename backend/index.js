require('dotenv').config();
const express = require('express');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Cloudinary configuration
require('./config/cloudinaryConfig');

app.use('/api/images', imageRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
