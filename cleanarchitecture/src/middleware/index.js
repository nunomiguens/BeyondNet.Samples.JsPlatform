const corsHandler = require('./cors-handler');
const errorHandler = require('./error-handler');
const {authHandler, authorizeHandler} = require('./auth-handler');
const callbackHandler = require('./callback');

module.exports = {
    corsHandler,
    errorHandler,
    authHandler,
    authorizeHandler,
    callbackHandler,
};
