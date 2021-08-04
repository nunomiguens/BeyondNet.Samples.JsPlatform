const express = require('express');
const server = require('./server');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');

//Child and act like a server
const connectDB = require('../config/db');

const app = express();

dotenv.config();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

connectDB();

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    process.exit(1);
});
