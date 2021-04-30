'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
const express_1 = require('express');
const userRouter_1 = __importDefault(require('./userRouter'));
class Routes {
    constructor() {
        this._router = express_1.Router();
        this._userRouter = userRouter_1.default;
        this.configure();
    }
    get router() {
        return this._router;
    }
    configure() {
        this._router.use('/user', this._userRouter);
    }
}
module.exports = new Routes().router;
//# sourceMappingURL=routes.js.map
