const makeCoderHelper = require('./coder');
const coderHelper = makeCoderHelper();

const gravatarOptions = {
    s: '200',
    r: 'pg',
    d: 'mm',
};

const makeGravatarHelper = require('./avatar');
const gravatarHelper = makeGravatarHelper({options: gravatarOptions, coder: coderHelper});

const makeEncryptorHelper = require('./crypto');
const encryptorHelper = makeEncryptorHelper({coder: coderHelper});

const makeEmailHelper = require('./email');
const emailHelper = makeEmailHelper({coder: coderHelper});

exports.gravatarHelper = gravatarHelper;
exports.encryptorHelper = encryptorHelper;
exports.coderHelper = coderHelper;
exports.emailHelper = emailHelper;
