const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req,res,next) =>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const {fullname,email,password} = req.body;
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
    res.status(200).json({
        success: true,
        token,
        user
    });
}