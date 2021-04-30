const {nameRule} = require('../core/common-rules');

const rolRules = () => {
    let rules = [];

    rules.push(nameRule);

    return rules;
};

module.exports = rolRules;
