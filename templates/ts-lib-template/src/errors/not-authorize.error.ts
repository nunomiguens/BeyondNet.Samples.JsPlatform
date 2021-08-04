import CustomError from "./custom.error";

class NotAuthorizeError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Not authroized.");

    Object.setPrototypeOf(this, NotAuthorizeError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default NotAuthorizeError;
