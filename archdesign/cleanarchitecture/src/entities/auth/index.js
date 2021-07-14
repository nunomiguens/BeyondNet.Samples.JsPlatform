const dates = require('date-fns');

const {Id, validatorWrapperFactory} = require('../core');
const {encryptorHelper, gravatarHelper} = require('../../utils/helpers');
const {tokenBuilder} = require('../../utils/builders');

const authRules = require('./auth-rules');
const validator = validatorWrapperFactory({rules: authRules()});

const buildMakeAuth = require('./auth-entity');
const makeAuth = buildMakeAuth({
    Id,
    validator,
    encryptor: encryptorHelper,
    token: tokenBuilder,
    gravatar: gravatarHelper,
    dates,
});

module.exports = makeAuth;
