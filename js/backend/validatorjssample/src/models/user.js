import constraints from "./user-constraint";
import validate from "validate.js";

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    validate() {
        let errors = [];

        errors.push(validate({username: this.username, password: this.password}, constraints));

        return errors;
    }

    print() {
        console.log(this.validate());
    }
}

export default User;
