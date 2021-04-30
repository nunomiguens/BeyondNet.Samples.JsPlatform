'use strict';
class UserController {
    defaultMethod() {
        return `You've reached the ${this.constructor.name} default method`;
    }
}
module.exports = new UserController();
//# sourceMappingURL=userController.js.map
