const buildMakeAuth = ({Id, validator, encryptor, token, gravatar, dates}) => {
    return function makeAuth({
        id = Id.makeId(),
        name,
        email,
        password,
        status,
        createdOn = dates.formatISO(new Date()),
        modifiedOn = dates.formatISO(new Date()),
    } = {}) {
        let brokenRules;

        initialize();

        return Object.freeze({
            getId: () => id,
            getName: () => name,
            getEmail: () => email,
            getPassword: async () => await setPassword(password),
            getResetPassword: async () => await resetPassword(),
            isMatchedPassword: async passwordFound => await matchedPassword(passwordFound),
            getToken: async id => await setToken(id),
            getTokenHashed: async token => await setHashToken(token),
            getAvatar: async () => await setAvatar(email),
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

        async function setPassword(password) {
            return await encryptor.encrypt(password);
        }

        async function matchedPassword(passwordFound) {
            return await encryptor.isMatch(password, passwordFound);
        }

        async function setToken(id) {
            return await token.build(id);
        }

        async function setAvatar(email) {
            return await gravatar.get(email);
        }

        async function resetPassword() {
            const resetToken = await encryptor.getRandomBytes(20);

            const result = {
                publicToken: resetToken,
                secretToken: await getHash(resetToken),
                expire: dates.formatISO(Date.now() + 10 * 60 * 1000),
            };

            return result;
        }

        async function setHashToken(token) {
            return await getHash(token);
        }

        async function getHash(token) {
            return await encryptor.getHash(token);
        }
    };
};

module.exports = buildMakeAuth;
