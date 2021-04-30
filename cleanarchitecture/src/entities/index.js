const {makeUser, makeAddress} = require('./user');
const {makeSystem, makeModule, makeOption, makeCommand, makeRol} = require('./system');
const {makeProfile, makeAssignment} = require('./profile');
const makeCompany = require('./company');
const makeAuth = require('./auth');

module.exports = {
    makeUser,
    makeAddress,
    makeSystem,
    makeModule,
    makeOption,
    makeCommand,
    makeRol,
    makeProfile,
    makeAssignment,
    makeCompany,
    makeAuth,
};
