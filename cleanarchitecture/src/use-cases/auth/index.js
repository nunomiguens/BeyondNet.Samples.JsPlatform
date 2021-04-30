const {coderHelper, encryptorHelper, gravatarHelper, emailHelper} = require('../../utils/helpers');
const {tokenBuilder} = require('../../utils/builders');

const {usersDb} = require('../../data-access');
const makeAuth = require('../../entities/auth');
const makeAuthApplication = require('./auth');

const authApplication = makeAuthApplication({
    repository: usersDb,
    authModel: makeAuth,
    encryptor: encryptorHelper,
    gravatar: gravatarHelper,
    token: tokenBuilder,
    coder: coderHelper,
    mailer: emailHelper,
});

exports.authApplication = authApplication;
