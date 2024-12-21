const mongoose = require('mongoose');

/**
 * Connects to the MongoDB database at the URL specified in the MONGO_URL
 * environment variable. If the connection is successful, logs "Connected to
 * MongoDB" to the console. If the connection fails, logs "Error connecting to
 * MongoDB:" followed by the error message to the console.
 */
const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('inside connectToDB Error connecting to MongoDB:', error);
    });
};

module.exports = connectToDB;
