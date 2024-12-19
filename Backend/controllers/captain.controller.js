const CaptainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const BlackListTokenModel = require('../models/blackListToken.model');

module.exports.registerCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        const isCaptainExists = await CaptainModel.findOne({ email });
        if (isCaptainExists) {
            return res.status(400).json({
                success: false,
                error: 'Captain already exists'
            });
        }

        const hashPassword = await CaptainModel.hashPassword(password);

        const captain = await captainService.createCaptain({
            fullname,
            email,
            password: hashPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });

        const token = captain.generateAuthToken();

        res.status(201).json({
            success: true,
            token,
            captain
        });
    } catch (error) {
        next(error);
    }
}


module.exports.loginCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;
        const captain = await CaptainModel.findOne({email}).select('+password');
        if(!captain){
            return res.status(401).json({
                success: false,
                error: 'Invalid email or password'
            });
        }

        const isMatch = await captain.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({
                success: false,
                error: 'Invalid email or password'
            });
        }

        const token = captain.generateAuthToken();
        console.log('Generated token:', token);
        // Set token in cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: false, // Set to false for development
            sameSite: 'lax', // Changed from strict to lax
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }); 

        console.log('Cookie set:', req.cookies);

        res.status(200).json({
            success: true,
            token,
            captain: {
                _id: captain._id,
                fullname: captain.fullname,
                email: captain.email,
                vehicle: captain.vehicle,
                status: captain.status
            }
        });
    } catch (error) {
        next(error);
    }
}

module.exports.getCaptainProfile = async (req, res, next) => {
    try {
        const captain = req.captain;
        res.status(200).json({
            success: true,
            captain
        });
    } catch (error) {
        next(error);
    }
}

module.exports.logoutCaptain = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
       await BlackListTokenModel.create({token});
    res.status(200).json({
        success: true,
        message: 'Captain logged out successfully'
    });
}