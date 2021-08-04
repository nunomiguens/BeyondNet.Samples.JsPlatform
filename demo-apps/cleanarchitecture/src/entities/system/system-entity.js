const buildMakeSystem = ({Id, validator}) => {
    return function makeSystem({
        id = Id.makeId(),
        name,
        company,
        photo,
        averageCost,
        status,
        createdOn = dates.formatISO(new Date()),
        modifiedOn = dates.formatISO(new Date()),
    } = {}) {
        initialize();

        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getCompany: () => company,
            getPhoto: () => photo || 'defaultSystem.jpg',
            getAverageCost: () => averageCost || 0.0,
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

module.exports = buildMakeSystem;
