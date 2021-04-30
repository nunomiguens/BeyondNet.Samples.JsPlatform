const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authHandler = (req, res, next) => {
    let key;

    const authorization = req.headers.authorization || null;
    const cookie = req.cookies.umstoken || null;
    const header = req.header('x-auth-token') || null;

    if (header) key = req.header('x-auth-token');
    if (authorization && authorization.startsWith('Bearer')) key = req.headers.authorization.split(' ')[2];
    if (cookie) key = req.cookies.umstoken;

    if (!key) return res.status(401).json({error: 'No token, authorization denied'});

    try {
        const decoded = jwt.verify(key, process.env.JWT_SECRET);
        //TODO: We should get the user profile and roles, in order to can validate the authorize. How I can do it?
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({error: 'token is not valid'});
    }
};

//TODO: Related with authHandler
const authorizeHandler = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new Error(`User role ${req.user.role} is not authorize to access thos route`, 403));
        }
        next();
    };
};

exports.authHandler = authHandler;
exports.authorizeHandler = authorizeHandler;
