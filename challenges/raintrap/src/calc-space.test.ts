import calculateMaxSpaceToFillWater from './calc-space';

describe('Challenge - Algorithm', () => {
    it('Should return a valid value', () => {
        const array = [2, 0, 2, 0, 2];

        const maxSpaceToFill = calculateMaxSpaceToFillWater(array);

        expect(maxSpaceToFill).toBeGreaterThan(0);
    });

    it('Should throw an exception if array is null or length 0', () => {
        const array: number[] | null = [];

        expect(() => {
            calculateMaxSpaceToFillWater(array);
        }).toThrowError('You should not provide an empty valid');
    });

    it('Should throw an exception if array length is greater than 10 exp 5 or less than 0', () => {
        const value = 3 * Math.pow(10, 4) + 1;
        const array: number[] | null = [value];

        for (let index = 0; index < value; index++) {
            array.push(index);
        }

        expect(() => {
            calculateMaxSpaceToFillWater(array);
        }).toThrowError();
    });

    it('Should throw an exception if one index value is greater than 10 exp 5 or less than 0', () => {
        const value = 3 * Math.pow(10, 5) + 1;
        const array: number[] | null = [0, 1, value, 2];

        expect(() => {
            calculateMaxSpaceToFillWater(array);
        }).toThrowError();
    });
});
