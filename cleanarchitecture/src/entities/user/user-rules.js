const {nameRule} = require('../core/common-rules');

const userRules = () => {
    let rules = [];

    rules.push({...nameRule});

    return rules;
};

module.exports = userRules;
