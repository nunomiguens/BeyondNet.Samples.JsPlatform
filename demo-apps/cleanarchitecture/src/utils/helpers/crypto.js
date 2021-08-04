const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const makeEncryptorHelper = ({coder}) => {
    return Object.freeze({
        encrypt,
        isMatch,
        getHash,
        getRandomBytes,
    });

    async function encrypt(value) {
        try {
            const salt = await bcrypt.genSalt(10);

            return await bcrypt.hash(value, salt);
        } catch (err) {
            coder.InternalServerError(err.message);
        }
    }

    async function isMatch(value, encryptedValue) {
        try {
            return await bcrypt.compare(value, encryptedValue);
        } catch (err) {
            coder.InternalServerError(err.message);
        }
    }

    async function getRandomBytes(size) {
        try {
            return await crypto.randomBytes(size).toString('hex');
        } catch (err) {
            coder.InternalServerError(err.message);
        }
    }

    async function getHash(value) {
        try {
            return await crypto
                .createHash('sha256')
                .update(value)
                .digest('hex');
        } catch (err) {
            coder.InternalServerError(err.message);
        }
    }
};

module.exports = makeEncryptorHelper;
