const {coderHelper} = require('../../utils/helpers');

const makeAuthController = require('./auth');

const {authApplication} = require('../../use-cases');

const authController = makeAuthController({authApplication, coder: coderHelper});

module.exports = authController;
