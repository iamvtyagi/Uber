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

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (HTML form data)
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/users', userRouter); 
app.use('/captains', captainRouter);

module.exports = app;
