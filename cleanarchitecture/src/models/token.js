const dates = require('date-fns');

const TokenModes = {
    BEAR: 'BEAR',
    HEADER: 'HEADER',
    COOKIE: 'COOKIE',
};

class Token {
    constructor(mode, name, value) {
        this.mode = mode;
        this.name = name;
        this.value = value;
        this.options = {
            expires: dates.formatISO(new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000)),
            httpOnly: true,
            maxAge: process.env.JWT_MAX_AGE,
        };

        if (process.env.NODE_ENV === 'production') {
            this.options.secure = true;
        }
    }
}

module.exports = {
    Token,
    TokenModes,
};
