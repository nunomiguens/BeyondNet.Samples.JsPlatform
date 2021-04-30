const dates = require('date-fns');

const {Id, validatorWrapperFactory} = require('../core');

const buildMakeProfile = require('./profile-entity');
const buildMakeAssignment = require('./assignment-entity');

const profileRules = require('./profile-rules');
const assignmentRules = require('./assignment-rules');

const profileValidator = validatorWrapperFactory({rules: profileRules()});
const assignmentValidator = validatorWrapperFactory({rules: assignmentRules()});

const makeProfile = buildMakeProfile({Id, validator: profileValidator, dates});
const makeAssignment = buildMakeAssignment({Id, validator: assignmentValidator, dates});

module.exports = {
    makeProfile,
    makeAssignment,
};
