const gravatar = require('gravatar');

const makeGravatarHelper = ({options, coder}) => {
    return Object.freeze({
        get,
    });

    async function get(email) {
        try {
            return await gravatar.url(email, options);
        } catch (err) {
            coder.InternalServerError(err.message);
        }
    }
};

module.exports = makeGravatarHelper;
