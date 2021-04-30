'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const error_model_1 = __importDefault(require('./error-model'));
describe('MODELS - ErrorModel', () => {
    test('should create an instance', () => {
        const model = new error_model_1.default(200, 'foo');
        expect(model).not.toBeNull();
    });
});
//# sourceMappingURL=error-model.test.js.map
