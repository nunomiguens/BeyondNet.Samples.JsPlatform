const {nameRule} = require('../core/common-rules');

const moduleRules = () => {
    let rules = [];

    rules.push(nameRule);

    return rules;
};

module.exports = moduleRules;
