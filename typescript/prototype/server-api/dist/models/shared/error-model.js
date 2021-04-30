'use strict';
class ErrorModel extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.status = 'error';
    }
}
module.exports = ErrorModel;
//# sourceMappingURL=error-model.js.map
