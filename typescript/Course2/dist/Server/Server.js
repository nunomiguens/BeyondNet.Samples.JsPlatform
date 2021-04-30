"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.somePrivateLogic = function () {
        console.log("Printing some private logic");
    };
    Server.prototype.createServer = function () {
        console.log("Starting server");
    };
    return Server;
}());
exports.Server = Server;
