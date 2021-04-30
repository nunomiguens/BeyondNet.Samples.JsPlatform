class ValidatorError {
    constructor(field) {
        this.field = field;
        this.errors = [];
    }
}

module.exports = ValidatorError;
