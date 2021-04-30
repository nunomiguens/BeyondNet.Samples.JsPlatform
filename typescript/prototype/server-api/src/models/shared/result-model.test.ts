import { ResultModel, ResultTypes } from './result-model';

describe('MODELS - ResultModel', () => {
    test('should create an instance', () => {
        const model = new ResultModel(ResultTypes.Data, 200, 'foo', 'foo');

        expect(model).not.toBeNull();
    });
});
