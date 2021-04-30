const {ResultTypes, ErrorTypes} = require('../../models');

const buildError = (result, res, req, next) => {
    if (result.type !== ResultTypes.ERROR) {
        send(res, 500, `${result.message}, stack: ${result.stack}`);
    } else {
        if (process.env.NODE_ENV === 'development') console.log(result);

        if (result.code === ErrorTypes.MONGOOSE_ERROR_DUPLICATE) {
            send(res, 400, `Duplicate key value entered`);
        }

        switch (result.name) {
            case ErrorTypes.MONGOOSE_ERROR_CAST:
                send(res, 400, `Resource not found`);
                break;
            case ErrorTypes.MONGOOSE_ERROR_VALIDATION:
                const message = result.errors ? Object.values(result.errors).map(val => val.message) : result.message;
                send(res, 400, message);
                break;
            case ErrorTypes.VALIDATOR_ERROR:
                send(res, 400, result.payload.message);
                break;
            default:
                res.status(result.statusCode || 500).json({
                    success: false,
                    error: result.payload.message || 'Internal Server Error',
                });
        }
    }
};

const send = (res, code, message) => {
    res.status(code).json({
        success: false,
        error: message,
    });
};

module.exports = buildError;
