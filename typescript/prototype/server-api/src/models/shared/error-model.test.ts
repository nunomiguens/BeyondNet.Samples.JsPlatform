import ErrorModel from './error-model';

describe('MODELS - ErrorModel', () => {
    test('should create an instance', () => {
        const model = new ErrorModel(200, 'foo');

        expect(model).not.toBeNull();
    });
});
