const validate = require('validate.js');
const {ValidatorError} = require('../../models');

function validatorWrapperFactory({rules}) {
    return Object.freeze({
        getBrokenRules: attributes => getBrokenRules(attributes),
    });

    function getBrokenRules(attributes) {
        const errors = getWrapperErrors(attributes);

        return errors.length ? getNormalizedErrors(errors) : [];
    }

    function getWrapperErrors(attributes) {
        let wrapperErrors = [];

        rules.forEach(rule => {
            const errors = validate({...attributes}, rule);

            if (errors) {
                wrapperErrors.push(errors);
            }
        });

        return wrapperErrors;
    }

    function getNormalizedErrors(wrapperErrors) {
        let validatorErrors = [];

        wrapperErrors.forEach(wrapperError => {
            const jsonString = JSON.stringify(wrapperError);
            const jsonObj = JSON.parse(jsonString);
            const parentKey = Object.keys(jsonObj);

            parentKey.forEach(rootKey => {
                let validatorError = new ValidatorError(rootKey);

                jsonObj[rootKey].forEach(child => {
                    validatorError.errors.push(child);
                });

                validatorErrors.push(validatorError);
            });
        });

        return validatorErrors;
    }
}

module.exports = validatorWrapperFactory;
