const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const BlackListTokenModel = require('../models/blackListToken.model');

module.exports.registerUser = async (req,res,next) =>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {fullname,email,password} = req.body;

        const isUserExists = await userModel.findOne({ email });
        if (isUserExists) {
            return res.status(400).json({
                success: false,
                error: 'User already exists'
            });
        }

        const hashPassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword
        });

        const token = user.generateAuthToken();
      console.log(`inside registerUser controller and user is created`);
        res.status(201).json({
            success: true,
            token,
            user
        });
    } catch (error) {
        next(error);
    }
}  

module.exports.loginUser = async (req,res,next) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({
            success: false,
            error: 'Invalid email or password'
        });
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({
            success: false,
            error: 'Invalid email or password'
        });
    }
    const token = user.generateAuthToken();
    console.log(`inside loginUser controller and user is logged in`);
    
    // Set token in cookie
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    res.status(200).json({
        success: true,
        token,
        user
    });
}

module.exports.getUserProfile = (req,res) =>{
    res.status(200).json({
        success: true,
        user: req.user
    });
}

module.exports.logoutUser =async (req,res) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
       await BlackListTokenModel.create({token});
    res.status(200).json({
        success: true,
        message: 'User logged out successfully'
    });
}