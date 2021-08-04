const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

const {authRouter, companyRouter, systemRouter, userRouter, profileRouter} = require('./routes');
const {errorHandler, corsHandler} = require('./middleware');

const app = express();

dotenv.config();

const apiRoot = process.env.UMS_BASE_ROOT;

app.use(express.json({extended: false}));

app.use(cookieParser());

// File uploading
app.use(fileupload());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enabled cors
app.use(corsHandler);

app.use(`${apiRoot}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(`${apiRoot}/auth`, authRouter);
app.use(`${apiRoot}/company`, companyRouter);
app.use(`${apiRoot}/system`, systemRouter);
app.use(`${apiRoot}/user`, userRouter);
app.use(`${apiRoot}/profile`, profileRouter);

app.use(errorHandler);

module.exports = app;
