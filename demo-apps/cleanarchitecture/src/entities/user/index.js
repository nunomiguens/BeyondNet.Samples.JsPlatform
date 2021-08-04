const dates = require('date-fns');

const {Id, validatorWrapperFactory} = require('../core');
const {encryptorHelper, gravatarHelper} = require('../../utils/helpers');
const {geocoderProvider} = require('../../utils/providers');
const buildMakeUser = require('./user-entity');
const buildMakeAddress = require('./address-entity');

const userRules = require('./user-rules');
const addressRules = require('./address-rules');

const userValidator = validatorWrapperFactory({rules: userRules()});
const addressValidator = validatorWrapperFactory({rules: addressRules()});

const makeUser = buildMakeUser({
    Id,
    validator: userValidator,
    encryptor: encryptorHelper,
    gravatar: gravatarHelper,
    dates,
});
const makeAddress = buildMakeAddress({Id, validator: addressValidator, dates: dates, geocoder: geocoderProvider});

module.exports = {
    makeUser,
    makeAddress,
};
