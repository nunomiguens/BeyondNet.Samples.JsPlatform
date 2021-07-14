const {nameRule} = require('../core/common-rules');

const optionRules = () => {
    let rules = [];

    rules.push(nameRule);

    return rules;
};

module.exports = optionRules;
