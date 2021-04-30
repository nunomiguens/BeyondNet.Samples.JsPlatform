'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ResultHelper = exports.ResultCodes = void 0;
const models_1 = require('../../../models');
var ResultCodes;
(function (ResultCodes) {
    ResultCodes['Accepted'] = 'ACCEPTED';
    ResultCodes['Created'] = 'CREATED';
    ResultCodes['Ok'] = 'OK';
    ResultCodes['InternalServerError'] = 'INTERNALSERVERERROR';
    ResultCodes['BadRequest'] = 'BADREQUEST';
    ResultCodes['Forbidden'] = 'FORBIDDEN';
    ResultCodes['Unauthorized'] = 'UNAUTHORIZED';
    ResultCodes['NotFound'] = 'NOTFOUND';
    ResultCodes['NoContent'] = 'NOCONTENT';
})((ResultCodes = exports.ResultCodes || (exports.ResultCodes = {})));
class ResultHelper {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        this.buildResult = (type, code, name, payload) => {
            return new models_1.ResultModel(type, code, name, payload);
        };
    }
    static Instance() {
        if (!ResultHelper.instance) {
            ResultHelper.instance = new ResultHelper();
        }
        return ResultHelper.instance;
    }
    Accepted(payload) {
        return this.buildResult(models_1.ResultTypes.Data, 202, ResultCodes.Accepted, payload);
    }
    Created(payload) {
        return this.buildResult(models_1.ResultTypes.Data, 201, ResultCodes.Created, payload);
    }
    Ok(payload) {
        return this.buildResult(models_1.ResultTypes.Data, 200, ResultCodes.Ok, payload);
    }
    InternalServerError(payload) {
        return this.buildResult(models_1.ResultTypes.Error, 500, ResultCodes.InternalServerError, payload);
    }
    BadRequest(payload) {
        return this.buildResult(models_1.ResultTypes.Error, 400, ResultCodes.BadRequest, payload);
    }
    Forbidden(payload) {
        return this.buildResult(models_1.ResultTypes.Error, 403, ResultCodes.Forbidden, payload);
    }
    Unauthorized(payload) {
        return this.buildResult(models_1.ResultTypes.Error, 401, ResultCodes.Unauthorized, payload);
    }
    NotFound(payload) {
        return this.buildResult(models_1.ResultTypes.Error, 404, ResultCodes.NotFound, payload);
    }
    NoContent(payload) {
        return this.buildResult(models_1.ResultTypes.Error, 204, ResultCodes.NoContent, payload);
    }
}
exports.ResultHelper = ResultHelper;
//# sourceMappingURL=result-helper.js.map
