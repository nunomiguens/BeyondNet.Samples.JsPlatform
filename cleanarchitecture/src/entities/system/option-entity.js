const buildMakeOption = ({Id, validator, dates}) => {
    return function makeOption({
        id = Id.makeId(),
        module,
        name,
        status,
        createdOn = dates.formatISO(new Date()),
        modifiedOn = dates.formatISO(new Date()),
    } = {}) {
        initialize();

        return Object.freeze({
            getId: () => id,
            getModule: () => module,
            getName: () => name,
            getStatus: () => status,
            getCreatedOn: () => createdOn,
            getModifiedOn: () => modifiedOn,
            getBrokenRules: attributes => checkRules(attributes),
            isValid: () => (brokenRules.length ? false : true),
        });
    };

    function initialize() {
        this.brokenRules = [];
    }

    function checkRules(attributes) {
        this.brokenRules = [...validator.getBrokenRules(attributes)];

        return this.brokenRules;
    }
};

module.exports = buildMakeOption;
