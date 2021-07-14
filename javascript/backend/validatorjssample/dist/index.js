"use strict";

var _user = _interopRequireDefault(require("./models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var user = new _user["default"]("Alberto", "1222222");
console.log(user.validate());