import { ResultModel, ResultTypes, IResultModel } from '../../../models';
import { ResultHelper } from './result-helper';
import 'reflect-metadata';

describe('UTIL - HELPER - ResultHelper', () => {
    const buildInstance = () => ResultHelper.Instance();
    const payload = 'foo';

    const buildDataModel = (code: number, name: string): IResultModel =>
        new ResultModel(ResultTypes.Data, code, name, payload);

    const buildErrorModel = (code: number, name: string): IResultModel =>
        new ResultModel(ResultTypes.Error, code, name, payload);

    test('should return an instance', () => {
        const instance = buildInstance();

        expect(instance).not.toBeNull();
        expect(instance).toHaveProperty('Accepted');
        expect(instance).toHaveProperty('Created');
        expect(instance).toHaveProperty('Ok');
    });

    test('should execute Accepted', () => {
        const instance = buildInstance();

        const result = instance.Accepted(payload);

        const expectedValue = buildDataModel(202, 'ACCEPTED');

        expect(result).toStrictEqual(expectedValue);
    });

    test('should execute Created', () => {
        const instance = buildInstance();

        const result = instance.Created(payload);

        const expectedValue = buildDataModel(201, 'CREATED');

        expect(result).toStrictEqual(expectedValue);
    });

    test('should execute Ok', () => {
        const instance = buildInstance();

        const result = instance.Ok(payload);

        const expectedValue = buildDataModel(200, 'OK');

        expect(result).toStrictEqual(expectedValue);
    });

    test('should execute InternalServerError', () => {
        const instance = buildInstance();

        const result = instance.InternalServerError(payload);

        const expectedValue = buildErrorModel(500, 'INTERNALSERVERERROR');

        expect(result).toStrictEqual(expectedValue);
    });

    test('should execute BadRequest', () => {
        const instance = buildInstance();

        const result = instance.BadRequest(payload);

        const expectedValue = buildErrorModel(400, 'BADREQUEST');

        expect(result).toStrictEqual(expectedValue);
    });

    test('should execute Forbidden', () => {
        const instance = buildInstance();

        const result = instance.Forbidden(payload);

        const expectedValue = buildErrorModel(403, 'FORBIDDEN');

        expect(result).toStrictEqual(expectedValue);
    });

    test('should execute Unauthorized', () => {
        const instance = buildInstance();

        const result = instance.Unauthorized(payload);

        const expectedValue = buildErrorModel(401, 'UNAUTHORIZED');

        expect(result).toStrictEqual(expectedValue);
    });

    test('should execute NotFound', () => {
        const instance = buildInstance();

        const result = instance.NotFound(payload);

        const expectedValue = buildErrorModel(404, 'NOTFOUND');

        expect(result).toStrictEqual(expectedValue);
    });

    test('should execute NoContent', () => {
        const instance = buildInstance();

        const result = instance.NoContent(payload);

        const expectedValue = buildErrorModel(204, 'NOCONTENT');

        expect(result).toStrictEqual(expectedValue);
    });
});
