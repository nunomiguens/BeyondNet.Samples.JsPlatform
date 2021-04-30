'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message,
    });
};
exports.default = errorHandler;
//# sourceMappingURL=error-handler.js.map
