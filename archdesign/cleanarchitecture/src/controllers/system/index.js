const {coderHelper} = require('../../utils/helpers');

const makeSystemController = require('./system');
const makeModuleController = require('./module');
const makeOptionController = require('./option');
const makeCommandController = require('./command');
const makeRolController = require('./rol');

const {
    systemApplication,
    moduleApplication,
    optionApplication,
    commandApplication,
    rolApplication,
} = require('../../use-cases');

const systemController = makeSystemController({systemApplication, coder: coderHelper});
const moduleController = makeModuleController({moduleApplication, coder: coderHelper});
const optionController = makeOptionController({optionApplication, coder: coderHelper});
const commandController = makeCommandController({commandApplication, coder: coderHelper});
const rolController = makeRolController({rolApplication, coder: coderHelper});

module.exports = {
    systemController,
    moduleController,
    optionController,
    commandController,
    rolController,
};
