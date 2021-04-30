const {HttpError} = require('../models');

const makeCompanyDb = require('./company');
const {makeUserDb, makeAddressDb} = require('./user');
const {makeProfileDb, makeAssignmentDb} = require('./profile');
const {makeSystemDb, makeModuleDb, makeOptionDb, makeCommandDb, makeRolDb} = require('./system');

module.exports = {
    companiesDb: makeCompanyDb({HttpError}),
    usersDb: makeUserDb({HttpError}),
    addressesDb: makeAddressDb({HttpError}),
    profilesDb: makeProfileDb({HttpError}),
    assignmentsDb: makeAssignmentDb({HttpError}),
    systemsDb: makeSystemDb({HttpError}),
    modulesDb: makeModuleDb({HttpError}),
    optionsDb: makeOptionDb({HttpError}),
    commandsDb: makeCommandDb({HttpError}),
    rolesDb: makeRolDb({HttpError}),
};
