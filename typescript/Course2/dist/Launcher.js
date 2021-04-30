"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = require("../src/Server/Server");
var Launcher = /** @class */ (function () {
    function Launcher() {
        this.name = "";
        this.server = new Server_1.Server();
    }
    Launcher.prototype.LaunchApp = function () {
        console.log('starter app');
        this.server.createServer();
        this.server.somePrivateLogic();
    };
    return Launcher;
}());
new Launcher().LaunchApp();
