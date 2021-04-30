const buildMakeCompany = ({Id, validator, dates}) => {
    return function makeCompany({
        id = Id.makeId(),
        name,
        status = 1,
        createdOn = dates.formatISO(new Date()),
        modifiedOn = dates.formatISO(new Date()),
    } = {}) {
        let brokenRules;

        initialize();

        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getStatus: () => status,
            getCreatedOn: () => createdOn,
            getModifiedOn: () => modifiedOn,
            getBrokenRules: attributes => checkRules(attributes),
            isValid: () => (brokenRules.length ? false : true),
        });

        function initialize() {
            brokenRules = [];
        }

        function checkRules(attributes) {
            brokenRules = [...validator.getBrokenRules(attributes)];

            return brokenRules;
        }
    };
};

module.exports = buildMakeCompany;
