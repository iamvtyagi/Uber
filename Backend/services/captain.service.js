const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ fullname, email, password, color, plate, capacity, vehicleType }) => {
    if (!fullname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }

    // const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        },
        status: 'inactive'
    });

    return captain;
}