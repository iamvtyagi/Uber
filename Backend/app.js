const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDB = require('./db/db');
const userRouter = require('./routes/user.routes');

connectToDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (HTML form data)
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRouter); 

module.exports = app;
