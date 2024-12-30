const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDB = require('./db/db');
const userRouter = require('./routes/user.routes');
const captainRouter = require('./routes/captain.routes');


const app = express();

// Middleware
connectToDB();

app.use(cors(
    {
        origin: 'http://localhost:5173',
        withCredentials: true,
        credentials: true,
    }
));

app.use(express.json());  // done jab client browser ya postman data bheje to express use samjh paye data in json format
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (HTML form data)
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
   message = 'your device got Hacked';
   res.status(200).json({
    success: true,
    message
   });
});
app.use('/users', userRouter); 
app.use('/captains', captainRouter);

module.exports = app;
