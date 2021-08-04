const {Token, TokenModes} = require('../../../models');

const buildModel = token => {
    let model = new Token(process.env.JWT_TOKEN_MODE, process.env.JWT_TOKEN_NAME);

    if (model.mode === TokenModes.BEAR) {
        model.value = `Bearer ${token}`;
    } else if (model.mode === TokenModes.HEADER || model.mode === TokenModes.COOKIE) {
        model.value = token;
    }

    return model;
};

const buildPayload = rawData => {
    return {
        name: process.env.JWT_TOKEN_NAME,
        type: process.env.JWT_TOKEN_MODE,
        user: {
            id: rawData.id,
        },
    };
};

module.exports = {
    buildModel,
    buildPayload,
};
