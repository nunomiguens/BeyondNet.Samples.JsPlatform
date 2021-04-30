const buildMakeUser = ({Id, validator, encryptor, gravatar, dates}) => {
    return function makeUser({
        id = Id.makeId(),
        referenceKey,
        name,
        email,
        password,
        phone,
        activePeriod,
        skills,
        avatar,
        social,
        addresses,
        profiles,
        status,
        createdOn = dates.formatISO(new Date()),
        modifiedOn = dates.formatISO(new Date()),
    } = {}) {
        initialize();

        return Object.freeze({
            getId: () => id,
            getReferenceKey: () => referenceKey,
            getName: () => name,
            getEmail: () => email,
            getPassword: async () => await setPassword(password),
            getPhone: () => phone,
            getActivePeriod: () => setActivePeriod(activePeriod),
            getSkills: () => setSkills(skills),
            getAvatar: async () => await setAvatar(email),
            getSocial: () => social,
            getAddresses: () => addresses,
            getProfiles: () => profiles,
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

    async function setPassword(password) {
        return await encryptor.encrypt(password);
    }

    async function setAvatar(email) {
        return await gravatar.get(email);
    }

    function setActivePeriod(activePeriod) {
        return (
            !activePeriod && {
                from: dates.formatISO(new Date()),
                to: dates.formatISO(dates.add(new Date(), {years: 1})),
            }
        );
    }

    function setSkills(skills) {
        return Array.isArray(skills) ? skills : skills.split(',').map(skill => ' ' + skill.trim());
    }
};

module.exports = buildMakeUser;
