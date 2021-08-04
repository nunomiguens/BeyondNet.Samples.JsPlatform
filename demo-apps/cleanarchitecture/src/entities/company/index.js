const dates = require('date-fns');
const {Id, validatorWrapperFactory} = require('../core');

const companyRules = require('./company-rules');
const validator = validatorWrapperFactory({rules: companyRules()});

const buildMakeCompany = require('./company-entity');
const makeCompany = buildMakeCompany({Id, validator, dates});

module.exports = makeCompany;
