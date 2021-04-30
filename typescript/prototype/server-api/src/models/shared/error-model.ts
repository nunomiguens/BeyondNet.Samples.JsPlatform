export default class ErrorModel extends Error {
    protected status = 'error';
    constructor(public statusCode: number, public message: string) {
        super(message);
    }
}
