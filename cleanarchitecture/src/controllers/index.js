const {userController, addressController} = require('./user');
const {systemController, moduleController, optionController, commandController, rolController} = require('./system');
const {profileController, assignmentController} = require('./profile');
const companyController = require('./company');
const authController = require('./auth');

module.exports = {
    userController,
    addressController,
    systemController,
    moduleController,
    optionController,
    commandController,
    profileController,
    assignmentController,
    rolController,
    companyController,
    authController,
};
