const slugify = require('slugify');

const makeSluggerProvider = ({options, coder}) => {
    return Object.freeze({provide});

    async function provide(value) {
        if (!value) return coder.BadRequest(`The text ${value} cannot be slugged`);

        try {
            return await slugify(value, options);
        } catch (err) {
            return coder.InternalServerError(err.message);
        }
    }
};

module.exports = makeSluggerProvider;
