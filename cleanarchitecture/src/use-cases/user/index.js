const {coderHelper} = require('../../utils/helpers');
const {makeUser, makeAddress} = require('../../entities/user');
const {usersDb, addressesDb} = require('../../data-access');

const makeUserApplication = require('./user');
const userApplication = makeUserApplication({
    repository: usersDb,
    userModel: makeUser,
    coder: coderHelper,
});

const makeAddressApplication = require('./address');
const addressApplication = makeAddressApplication({
    repository: addressesDb,
    userRepository: usersDb,
    addressModel: makeAddress,
    coder: coderHelper,
});

module.exports = {
    userApplication,
    addressApplication,
};
