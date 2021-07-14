"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// const BuildFullName = firstName => middleName => lastName =>
//   `My fullname is ${firstName} ${middleName}, ${lastName}`;
var BuildFullName = function BuildFullName(firstName) {
  return function (middleName) {
    return function (lastName) {
      return "My fullname is ".concat(firstName, " ").concat(middleName, ", ").concat(lastName);
    };
  };
};

var _default = BuildFullName;
exports["default"] = _default;