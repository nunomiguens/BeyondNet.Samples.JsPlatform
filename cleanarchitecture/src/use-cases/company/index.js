const makeCompanyApplication = require('./company');
const {companiesDb} = require('../../data-access');

const {coderHelper} = require('../../utils/helpers');
const {slugProvider} = require('../../utils/providers');

const makeCompany = require('../../entities/company');
const companyApplication = makeCompanyApplication({
    repository: companiesDb,
    companyModel: makeCompany,
    coder: coderHelper,
    slugger: slugProvider,
});

module.exports = {
    companyApplication,
    companyApplication,
};
