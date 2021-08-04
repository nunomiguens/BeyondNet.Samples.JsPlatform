const {ResultTypes, Token, TokenModes} = require('../../models');

const headers = {
    'Content-Type': 'application/json',
};

const buildResponse = (result, res) => {
    if (result.type !== ResultTypes.DATA) return;

    res.type('json');

    if (result.headers || result.headers === undefined) res.set(headers);

    setCookie(result.payload.data, res);

    res.status(result.code).send(buildResponseData(result.payload));
};

const buildResponseData = payload => {
    let response = {
        success: true,
        payload,
    };

    if (Array.isArray(payload)) response.count = payload.length;

    return response;
};

const setCookie = (payload, res) => {
    if (payload instanceof Token) {
        const {mode, name, value, options} = payload;

        if (mode === TokenModes.COOKIE && value === 'logout') {
            res.cookie('umstoken', 'none', {
                expires: new Date(Date.now() + 10 * 1000),
                httpOnly: true,
            });
        } else if (mode === TokenModes.COOKIE) {
            res.cookie(name, value, options);
        }
    }
};

module.exports = buildResponse;
