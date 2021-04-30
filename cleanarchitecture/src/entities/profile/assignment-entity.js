const buildMakeAssignment = ({Id, validator, dates}) => {
    return function makeAssignment({
        id = Id.makeId(),
        profile,
        module,
        option,
        command,
        canAccess,
        canExecute,
        status,
        createdOn = dates.formatISO(new Date()),
        modifiedOn = dates.formatISO(new Date()),
    } = {}) {
        initialize();

        return Object.freeze({
            getId: () => id,
            getProfile: () => profile,
            getModule: () => module,
            getOption: () => option,
            getCommand: () => command,
            getCanAccess: () => canAccess,
            getCanExecute: () => canExecute,
            getStatus: () => status,
            getCreatedOn: () => createdOn,
            getModifiedOn: () => modifiedOn,
            getErrors: () => errors,
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

module.exports = buildMakeAssignment;
