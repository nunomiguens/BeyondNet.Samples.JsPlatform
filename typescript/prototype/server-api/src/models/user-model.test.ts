import UserModel from './user-model';
import 'reflect-metadata';

describe('MODEL- UserModel', () => {
    test('should create an instance', () => {
        const obj = new UserModel('foo', 'foo', 'foo', 'foo', 'foo');

        expect(obj).not.toBe(null);
    });
});
