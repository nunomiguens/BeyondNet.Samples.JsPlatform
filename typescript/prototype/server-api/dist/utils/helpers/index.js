'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.HelperTypes = exports.ResultCodes = exports.ResultHelper = void 0;
var result_helper_1 = require('./result/result-helper');
Object.defineProperty(exports, 'ResultHelper', {
    enumerable: true,
    get: function () {
        return result_helper_1.ResultHelper;
    },
});
Object.defineProperty(exports, 'ResultCodes', {
    enumerable: true,
    get: function () {
        return result_helper_1.ResultCodes;
    },
});
var types_1 = require('../shared/types');
Object.defineProperty(exports, 'HelperTypes', {
    enumerable: true,
    get: function () {
        return __importDefault(types_1).default;
    },
});
//# sourceMappingURL=index.js.map
