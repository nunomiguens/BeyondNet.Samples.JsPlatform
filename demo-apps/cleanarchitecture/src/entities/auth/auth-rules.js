const {emailRule} = require('../core/common-rules');

//TODO: Defect, implement logic to include conditional assigment of rules
// For this case, when is a signIn we need validate only email and password,
// however when we do a signUp whe should validate the name.
const authRules = () => {
    let rules = [];

    rules.push(emailRule);

    return rules;
};

module.exports = authRules;
