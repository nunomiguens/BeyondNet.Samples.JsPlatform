const {nameRule} = require('../core/common-rules');

const commandRules = () => {
    let rules = [];

    rules.push(nameRule);

    return rules;
};

module.exports = commandRules;
