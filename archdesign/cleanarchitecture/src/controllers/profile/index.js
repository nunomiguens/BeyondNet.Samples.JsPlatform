const {coderHelper} = require('../../utils/helpers');

const makeProfileController = require('./profile');
const makeAssignmentController = require('./assignment');

const {profileApplication, assignmentApplication} = require('../../use-cases');

const profileController = makeProfileController({profileApplication, coder: coderHelper});
const assignmentController = makeAssignmentController({assignmentApplication, coder: coderHelper});

module.exports = {
    profileController,
    assignmentController,
};
