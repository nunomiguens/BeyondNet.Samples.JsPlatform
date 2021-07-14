const buildMakeAddress = ({Id, validator, dates, geocoder}) => {
    return function makeAddress({
        id = Id.makeId(),
        user,
        address,
        location,
        status,
        createdOn = dates.formatISO(new Date()),
        modifiedOn = dates.formatISO(new Date()),
    } = {}) {
        initialize();

        return Object.freeze({
            getId: () => id,
            getUser: () => user,
            getAddress: () => address,
            getLocation: async () => setLocation(address),
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

    async function setLocation(address) {
        let location;

        if (process.env.GEOCODER_ACTIVE) location = await geocoder.provide(address);

        return location;
    }
};

module.exports = buildMakeAddress;
