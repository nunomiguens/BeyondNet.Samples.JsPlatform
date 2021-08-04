const {ErrorTypes} = require('../../../models');

const {buildErrorMessage, buildResultMessage} = require('./pure-functions');

const makeCoderHelper = () => {
    return Object.freeze({
        Accepted,
        Created,
        Ok,
        BadRequest,
        InternalServerError,
        Forbidden,
        Unauthorized,
        NotFound,
        NoContent,
    });

    function Accepted(payload) {
        return buildResultMessage(202, payload);
    }

    function Created(payload) {
        return buildResultMessage(201, payload);
    }

    function Ok(payload) {
        return buildResultMessage(200, payload);
    }

    function InternalServerError(payload) {
        throw buildErrorMessage(ErrorTypes.INTERNAL_SERVER_ERROR, 500, payload);
    }

    function BadRequest(payload) {
        throw buildErrorMessage(ErrorTypes.VALIDATOR_ERROR, 400, payload);
    }

    function Forbidden(payload) {
        throw buildErrorMessage(ErrorTypes.VALIDATOR_ERROR, 403, payload);
    }

    function Unauthorized(payload) {
        throw buildErrorMessage(ErrorTypes.VALIDATOR_ERROR, 401, payload);
    }

    function NotFound(payload) {
        throw buildErrorMessage(ErrorTypes.VALIDATOR_ERROR, 404, payload);
    }

    function NoContent(payload) {
        throw buildErrorMessage(ErrorTypes.VALIDATOR_ERROR, 204, payload);
    }
};

module.exports = makeCoderHelper;
