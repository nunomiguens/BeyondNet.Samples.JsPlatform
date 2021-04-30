const {coderHelper} = require('../helpers');
const makeTokenBuilder = require('./token');

const tokenBuilder = makeTokenBuilder({
    coder: coderHelper,
});

exports.tokenBuilder = tokenBuilder;
