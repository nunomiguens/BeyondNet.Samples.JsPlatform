'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserModel = exports.ErrorModel = exports.ResultTypes = exports.ResultModel = void 0;
var result_model_1 = require('./shared/result-model');
Object.defineProperty(exports, 'ResultModel', {
    enumerable: true,
    get: function () {
        return result_model_1.ResultModel;
    },
});
Object.defineProperty(exports, 'ResultTypes', {
    enumerable: true,
    get: function () {
        return result_model_1.ResultTypes;
    },
});
var error_model_1 = require('./shared/error-model');
Object.defineProperty(exports, 'ErrorModel', {
    enumerable: true,
    get: function () {
        return __importDefault(error_model_1).default;
    },
});
var user_model_1 = require('./user-model');
Object.defineProperty(exports, 'UserModel', {
    enumerable: true,
    get: function () {
        return __importDefault(user_model_1).default;
    },
});
//# sourceMappingURL=index.js.map
