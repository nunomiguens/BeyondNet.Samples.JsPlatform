'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ResultModel = exports.ResultTypes = void 0;
var ResultTypes;
(function (ResultTypes) {
    ResultTypes['Error'] = 'ERROR';
    ResultTypes['Data'] = 'DATA';
})((ResultTypes = exports.ResultTypes || (exports.ResultTypes = {})));
class ResultModel {
    constructor(type, code, name, payload) {
        this.Type = type;
        this.Code = code;
        this.Name = name;
        this.Payload = payload;
    }
}
exports.ResultModel = ResultModel;
//# sourceMappingURL=result-model.js.map
