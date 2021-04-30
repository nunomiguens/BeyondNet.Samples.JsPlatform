'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const user_model_1 = __importDefault(require('./user-model'));
require('reflect-metadata');
describe('MODEL- UserModel', () => {
    test('should create an instance', () => {
        const obj = new user_model_1.default('foo', 'foo', 'foo', 'foo', 'foo');
        expect(obj).not.toBe(null);
    });
});
//# sourceMappingURL=user-model.test.js.map
