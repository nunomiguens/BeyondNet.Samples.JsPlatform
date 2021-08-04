const errorHandler = (err, res, next) => {
    if (res.headerSent) {
        return next(err);
    }
    res.status(err.code || 500);
    res.json({message: err.message || 'An unknown error occurred!'});
};

module.exports = errorHandler;
