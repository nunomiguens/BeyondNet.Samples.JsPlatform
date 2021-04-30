'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
const express_1 = require('express');
const userController_1 = __importDefault(require('../controllers/userController'));
class UserRouter {
    constructor() {
        this._router = express_1.Router();
        this._userController = userController_1.default;
        this.configure();
    }
    get router() {
        return this._router;
    }
    configure() {
        this._router.get('/', (req, res, next) => {
            res.status(200).json(this._userController.defaultMethod());
        });
    }
}
module.exports = new UserRouter().router;
//# sourceMappingURL=userRouter.js.map
