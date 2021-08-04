const makeCompanyController = require('./company');

const {companyApplication} = require('../../use-cases');

const {coderHelper} = require('../../utils/helpers');

const companyController = makeCompanyController({companyApplication, coder: coderHelper});

module.exports = companyController;
