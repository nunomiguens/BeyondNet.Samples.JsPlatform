const {nameRule} = require('../core/common-rules');

const systemRules = () => {
    let rules = [];

    rules.push(nameRule);

    return rules;
};

module.exports = systemRules;
