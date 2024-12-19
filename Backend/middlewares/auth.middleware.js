const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const CaptainModel = require('../models/captain.model');
const BlackListTokenModel = require('../models/blackListToken.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies?.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    
    // console.log(token);
    if (!token) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized: No token provided'
        });
        // console.log(token);
    }

    // Verify token
    const blackListToken = await BlackListTokenModel.findOne({ token :token });
    if(blackListToken){
        return res.status(401).json({
            success: false,
            error: 'Unauthorized: Token is blacklisted'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        
        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Unauthorized: User not found'
            });
        }

        // Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized: Invalid token'
        });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    try {
        const token = req.cookies?.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
        
    // console.log(token);
        if (!token) {
            return res.status(401).json({
                success: false,
                error: 'Unauthorized: No token provided'
            });
        // console.log(token);
        }

        // Verify token
        const blackListToken = await BlackListTokenModel.findOne({ token });
        if(blackListToken){
            return res.status(401).json({
                success: false,
                error: 'Unauthorized: Token is blacklisted'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);
        
        const captain = await CaptainModel.findById(decoded._id);
        console.log('Found captain:', captain?._id);
        
        if (!captain) {
            return res.status(401).json({
                success: false,
                error: 'Unauthorized: Captain not found'
            });
        }

        // Attach captain to request object
        req.captain = captain;
        next();
    } catch (error) {
        console.error('Auth error:', error);
        return res.status(401).json({
            success: false,
            error: 'Unauthorized: Invalid token'
        });
    }
};