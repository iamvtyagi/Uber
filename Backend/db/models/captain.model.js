const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/,
            "Please add a valid email address with a .com or .in domain",
          ],
        minlength: [5, "Email must be at least 5 characters"],
      },
    password: {
        type: String,
        required: true,
        select: false
    },
    
    socketId : {
        type : String
    },

    status : {
        type : String,
        enum : ['active','inactive'],
        default : 'inactive'
    },

     vehicle :{
        color:{
            type : String,
            required : true,
            minlength : [3,'Color must be at least 3 characters']
        },
        plate:{
            type : String,
            required : true,
            minlength : [3,'Plate must be at least 3 characters']
        },
        capacity :{
            type : Number,
            required : true,
            min : [1,'Capacity must be at least 1']
        },
        vehicleType :{
            type : String,
            required : true,
            enum : ['car','motorcycle','auto'],
            default : 'car'
        }
     },
    
     location : {
        lat : {
            type : Number
        },
        lon : {
            type : Number   
        }
     }

});


captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    console.log(`inside generateAuthToken returning : ${token}`);
    return token;
}; 

captainSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    console.log(`inside comparePassword returning : ${isMatch}`);
    return isMatch;
};

captainSchema.statics.hashPassword = function (password) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    console.log(`inside hashPassword returning : ${hashedPassword}`);
    return hashedPassword;
};

const CaptainModel = mongoose.model('Captain', captainSchema);
module.exports = CaptainModel;

