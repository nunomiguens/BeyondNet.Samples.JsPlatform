"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userConstraint = _interopRequireDefault(require("./user-constraint"));

var _validate2 = _interopRequireDefault(require("validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(username, password) {
    _classCallCheck(this, User);

    this.username = username;
    this.password = password;
  }

  _createClass(User, [{
    key: "validate",
    value: function validate() {
      var errors = [];
      errors.push((0, _validate2["default"])(this.username, _userConstraint["default"]));
      return errors;
    }
  }, {
    key: "print",
    value: function print() {
      console.log(this.validate());
    }
  }]);

  return User;
}();

var _default = User;
exports["default"] = _default;