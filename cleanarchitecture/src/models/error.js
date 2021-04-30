const ErrorTypes = {
    INTERNAL_SERVER_ERROR: 'InternalServerError',
    MONGOOSE_ERROR_VALIDATION: 'ValidationError',
    MONGOOSE_ERROR_CAST: 'CastError',
    MONGOOSE_ERROR_DUPLICATE: 11000,
    VALIDATOR_ERROR: 'ValidatorError',
    NO_ERROR: 'NOERROR',
};

class HttpError extends Error {
    constructor(message) {
        let newMessage = Array.isArray(message) ? convertToStringList(message) : message;

        super(newMessage);

        Error.captureStackTrace(this, this.constructor);
    }
}

const convertToStringList = array => {
    let message = '';

    if (!array.length) return message;

    array.forEach(element => {
        message += element.errors ? element.errors.join(', ') : element;
    });

    return message;
};

exports.HttpError = HttpError;
exports.ErrorTypes = ErrorTypes;
