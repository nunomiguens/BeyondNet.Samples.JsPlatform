const dates = require('date-fns');

const {Id, validatorWrapperFactory} = require('../core');

const buildMakeSystem = require('../system/system-entity');
const buildMakeModule = require('../system/module-entity');
const buildMakeOption = require('../system/option-entity');
const buildMakeCommand = require('../system/command-entity');
const buildMakeRol = require('../system/rol-entity');

const systemRules = require('../system/system-rules');
const moduleRules = require('../system/module-rules');
const optionRules = require('../system/rol-rules');
const commandRules = require('../system/command-rules');
const rolRules = require('../system/rol-rules');

const systemValidator = validatorWrapperFactory({rules: systemRules()});
const moduleValidator = validatorWrapperFactory({rules: moduleRules()});
const optionValidator = validatorWrapperFactory({rules: optionRules()});
const commandValidator = validatorWrapperFactory({rules: commandRules()});
const rolValidator = validatorWrapperFactory({rules: rolRules()});

const makeSystem = buildMakeSystem({Id, validator: systemValidator, dates});
const makeModule = buildMakeModule({Id, validator: moduleValidator, dates});
const makeOption = buildMakeOption({Id, validator: optionValidator, dates});
const makeCommand = buildMakeCommand({Id, validator: commandValidator, dates});
const makeRol = buildMakeRol({Id, validator: rolValidator, dates});

module.exports = {
    makeSystem,
    makeModule,
    makeOption,
    makeCommand,
    makeRol,
};
