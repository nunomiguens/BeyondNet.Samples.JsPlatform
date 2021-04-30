'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const result_model_1 = require('./result-model');
describe('MODELS - ResultModel', () => {
    test('should create an instance', () => {
        const model = new result_model_1.ResultModel(result_model_1.ResultTypes.Data, 200, 'foo', 'foo');
        expect(model).not.toBeNull();
    });
});
//# sourceMappingURL=result-model.test.js.map
