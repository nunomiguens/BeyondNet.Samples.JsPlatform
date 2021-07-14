const jwt = require('jsonwebtoken');
const R = require('ramda');

const {buildModel, buildPayload} = require('./pure-function');

function makeTokenBuilder({coder}) {
    return Object.freeze({
        build,
    });

    async function build(rawData) {
        try {
            return await R.pipe(buildPayload, getToken, R.andThen(buildModel))(rawData);
        } catch (err) {
            coder.InternalServerError(err.message);
        }
    }

    async function getToken(payload) {
        try {
            const token = await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE});

            if (!token || token === undefined) throw coder.Unauthorized('Token is not valid or it was not defined');

            return token;
        } catch (err) {
            coder.InternalServerError(err.message);
        }
    }
}

module.exports = makeTokenBuilder;
