const buildRequest = require('./build-request');
const buildResponse = require('./build-response');
const buildError = require('./build-error');

const callbackHandler = controller => {
    return (req, res, next) => {
        const request = buildRequest(req);
        controller(request)
            .then(response => buildResponse(response, res))
            .catch(error => buildError(error, res, req, next));
    };
};

module.exports = callbackHandler;
