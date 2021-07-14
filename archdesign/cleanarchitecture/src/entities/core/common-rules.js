const nameRule = {
    name: {
        presence: true,
        length: {
            minimum: 3,
            message: 'must be at least 3 characters',
        },
        exclusion: {
            within: ['beyondnet'],
            message: "'%{value}' is not allowed",
        },
    },
};

const phoneRule = {
    phone: {
        presence: true,
        format: {
            pattern: '/^[^s@]+@[^s@]+.[^s@]+$/',
            message: 'Phone number has an invalid format',
        },
    },
};

const emailRule = {
    email: {
        format: {
            pattern: '[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}',
            message: 'Email has an invalid format',
        },
    },
};

exports.emailRule = emailRule;
exports.nameRule = nameRule;
exports.phoneRule = phoneRule;
