const buildMakeProfile = ({Id, validator, dates}) => {
    return function makeProfile({
        id = Id.makeId(),
        user,
        system,
        rol,
        description,
        current,
        status,
        createdOn = dates.formatISO(new Date()),
        modifiedOn = dates.formatISO(new Date()),
    } = {}) {
        initialize();

        return Object.freeze({
            getId: () => id,
            getUser: () => user,
            getSystem: () => system,
            getRol: () => rol,
            getDescription: () => description,
            getCurrent: () => current,
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

module.exports = buildMakeProfile;
