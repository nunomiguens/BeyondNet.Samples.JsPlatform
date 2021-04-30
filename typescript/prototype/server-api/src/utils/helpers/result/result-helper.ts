import { ResultModel, ResultTypes, IResultModel } from '../../../models';

export enum ResultCodes {
    Accepted = 'ACCEPTED',
    Created = 'CREATED',
    Ok = 'OK',
    InternalServerError = 'INTERNALSERVERERROR',
    BadRequest = 'BADREQUEST',
    Forbidden = 'FORBIDDEN',
    Unauthorized = 'UNAUTHORIZED',
    NotFound = 'NOTFOUND',
    NoContent = 'NOCONTENT',
}

export class ResultHelper {
    private static instance: ResultHelper;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {}

    public static Instance(): ResultHelper {
        if (!ResultHelper.instance) {
            ResultHelper.instance = new ResultHelper();
        }
        return ResultHelper.instance;
    }

    public Accepted(payload: unknown): IResultModel {
        return this.buildResult(ResultTypes.Data, 202, ResultCodes.Accepted, payload);
    }

    public Created(payload: unknown): IResultModel {
        return this.buildResult(ResultTypes.Data, 201, ResultCodes.Created, payload);
    }

    public Ok(payload: unknown): IResultModel {
        return this.buildResult(ResultTypes.Data, 200, ResultCodes.Ok, payload);
    }

    public InternalServerError(payload: unknown): IResultModel {
        return this.buildResult(ResultTypes.Error, 500, ResultCodes.InternalServerError, payload);
    }

    public BadRequest(payload: unknown): IResultModel {
        return this.buildResult(ResultTypes.Error, 400, ResultCodes.BadRequest, payload);
    }

    public Forbidden(payload: unknown): IResultModel {
        return this.buildResult(ResultTypes.Error, 403, ResultCodes.Forbidden, payload);
    }

    public Unauthorized(payload: unknown): IResultModel {
        return this.buildResult(ResultTypes.Error, 401, ResultCodes.Unauthorized, payload);
    }

    public NotFound(payload: unknown): IResultModel {
        return this.buildResult(ResultTypes.Error, 404, ResultCodes.NotFound, payload);
    }

    public NoContent(payload: string): IResultModel {
        return this.buildResult(ResultTypes.Error, 204, ResultCodes.NoContent, payload);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private buildResult = (type: ResultTypes, code: number, name: string, payload: any): IResultModel => {
        const tmpPayload = typeof payload === 'object' ? JSON.stringify(payload) : payload;

        return new ResultModel(type, code, name, tmpPayload);
    };
}
