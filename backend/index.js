const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://SHEMA0987:SHEMA0987@cluster0.wox4gc8.mongodb.net/ecommerce1");

// Handle MongoDB connection errors
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// API creation
app.get("/", (req, res) => {
    res.send("express app is running");
});

// Image storage
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `https://localhost:${port}/images/${req.file.filename}`
    });
});

// Starting the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});


// mongoose.connect("mongodb+srv://SHEMA0987:SHEMA0987@cluster0.wox4gc8.mongodb.net/ecommerce1")