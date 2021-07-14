const {authApplication} = require('./auth');
const {companyApplication} = require('./company');
const {
    systemApplication,
    moduleApplication,
    optionApplication,
    commandApplication,
    rolApplication,
} = require('./system');
const {userApplication, addressApplication} = require('./user');
const {profileApplication, assignmentApplication} = require('./profile');

module.exports = {
    authApplication,
    companyApplication,
    systemApplication,
    moduleApplication,
    optionApplication,
    commandApplication,
    rolApplication,
    userApplication,
    addressApplication,
    profileApplication,
    assignmentApplication,
};
