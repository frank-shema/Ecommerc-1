const port =4000;
const express= require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path=require('path');
const cors = require('cors');

app.use(express.json())
app.use(cors())

// mongodb connecetion
mongoose.connect("mongodb+srv://SHEMA0987:SHEMA0987@cluster0.wox4gc8.mongodb.net/ecommerce1")

// api creation
app.get("/",(req,res)=>{
    res.send("express app is running")
})

app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port" + port);
    }else{
        console.log("Error: " + error)
    }
})