const express = require('express');
const app = express();

app.use(express.json());

const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");


exports.auth = async(req, res, next) => {
    try{
        
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer", "");

        if(!token){
            return res.status(401).json({
                success : false,
                message : `Login please`
            });
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }   
        catch(error){
            return res.status(401).json({
                success : false,
                message : `Token is invalid`
            });
        }
        next();
    }
    catch(error){
        console.log(error.message);
        return res.status(401).json({
            success : false,
            message : `Login please`
        });
    }
} 