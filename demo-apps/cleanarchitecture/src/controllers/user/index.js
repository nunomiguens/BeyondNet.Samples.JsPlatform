const {coderHelper, encryptorHelper, gravatarHelper} = require('../../utils/helpers');

const makeUserController = require('./user');
const makeAddressController = require('./address');

const {userApplication, addressApplication} = require('../../use-cases');

const userController = makeUserController({
    userApplication,
    coder: coderHelper,
    encryptor: encryptorHelper,
    gravatar: gravatarHelper,
});

const addressController = makeAddressController({addressApplication, coder: coderHelper});

module.exports = {
    userController,
    addressController,
};
