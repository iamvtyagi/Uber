const CaptainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

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