const {coderHelper} = require('../../utils/helpers');

const {makeProfile, makeAssignment} = require('../../entities/profile');
const {
    profilesDb,
    usersDb,
    systemsDb,
    rolesDb,
    modulesDb,
    optionsDb,
    commandsDb,
    assignmentsDb,
} = require('../../data-access');

const makeProfileApplication = require('./profile');
const profileApplication = makeProfileApplication({
    profileRepository: profilesDb,
    userRepository: usersDb,
    systemRepository: systemsDb,
    rolRepository: rolesDb,
    profileModel: makeProfile,
    coder: coderHelper,
});

const makeAssignmentApplication = require('./assignment');
const assignmentApplication = makeAssignmentApplication({
    assignmentRepository: assignmentsDb,
    profileRepository: profilesDb,
    assignmentModel: makeAssignment,
    coder: coderHelper,
});

module.exports = {
    profileApplication,
    assignmentApplication,
};
