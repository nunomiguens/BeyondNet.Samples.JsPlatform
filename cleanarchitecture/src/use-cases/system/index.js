const {coderHelper} = require('../../utils/helpers');
const path = require('path');

const makeSystemApplication = require('./system');
const makeModuleApplication = require('./module');
const makeOptionApplication = require('./option');
const makeCommandApplication = require('./command');
const makeRolApplication = require('./rol');

const {systemsDb, rolesDb, commandsDb, modulesDb, optionsDb} = require('../../data-access');

const {makeSystem, makeModule, makeOption, makeCommand, makeRol} = require('../../entities/system');

const systemApplication = makeSystemApplication({
    repository: systemsDb,
    systemModel: makeSystem,
    coder: coderHelper,
    filePath: path,
});

const rolApplication = makeRolApplication({
    rolRepository: rolesDb,
    systemRepository: systemsDb,
    rolModel: makeRol,
    coder: coderHelper,
});

const commandApplication = makeCommandApplication({
    commandRepository: commandsDb,
    systemRepository: systemsDb,
    commandModel: makeCommand,
    coder: coderHelper,
});

const moduleApplication = makeModuleApplication({
    moduleRepository: modulesDb,
    systemRepository: systemsDb,
    moduleModel: makeModule,
    coder: coderHelper,
});

const optionApplication = makeOptionApplication({
    optionRepository: optionsDb,
    moduleRepository: modulesDb,
    optionModel: makeOption,
    coder: coderHelper,
});

module.exports = {
    systemApplication,
    rolApplication,
    commandApplication,
    moduleApplication,
    optionApplication,
};
