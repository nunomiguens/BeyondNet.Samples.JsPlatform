const {HttpError, Result, ResultTypes} = require('../../../models');

const headers = {
    'Content-Type': 'application/json',
};

const buildResult = (type, code, name, payload) => {
    return new Result({
        type,
        code,
        name,
        headers,
        payload,
    });
};

const buildErrorMessage = (name, code, payload) => {
    return buildResult(ResultTypes.ERROR, code, name, new HttpError(payload));
};

const buildResultMessage = (name, code, payload) => {
    return buildResult(ResultTypes.DATA, code, name, payload);
};

module.exports = {
    buildErrorMessage,
    buildResultMessage,
};
