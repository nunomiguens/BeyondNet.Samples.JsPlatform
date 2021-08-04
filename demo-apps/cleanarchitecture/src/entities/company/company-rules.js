const {nameRule} = require('../core/common-rules');

const companyRules = () => {
    let rules = [];

    rules.push(nameRule);

    return rules;
};

module.exports = companyRules;
