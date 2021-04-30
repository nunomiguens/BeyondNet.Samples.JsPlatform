type CurrencyOptions = {
    prefix?: string;
    suffix?: string;
};

export class NumberHelper {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    static formatAsCurrency(val: number | undefined, currencyOptions: CurrencyOptions = { prefix: '$' }): string {
        const { prefix = '', suffix = '' } = currencyOptions;

        return val == null ? '' : prefix + val.toFixed(2) + suffix;
    }

    static parseString(val: string | undefined): string | number | undefined {
        return NumberHelper.isNumber(val) ? parseFloat(val!) : undefined;
    }

    static toString(val: number | string | undefined): string | undefined {
        if (typeof val === 'number') return val.toString();
        else return NumberHelper.isNumber(val) ? val : '';
    }

    static isNumber(val: string | undefined): boolean {
        if (val == null) return false;
        return !isNaN(parseInt(val, 10));
    }
}
