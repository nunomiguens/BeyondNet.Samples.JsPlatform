export class ObjectUtils {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    static deepClone<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj)) as T;
    }
}
