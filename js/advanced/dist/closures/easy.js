"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var BuildFullName = function BuildFullName(firstName) {
  return function (middleName) {
    return function (lastName) {
      return firstName + " " + middleName + ", " + lastName;
    };
  };
}; // function BuildFullName(firstName) {
//   return function AddMiddleName(middleName) {
//     return function AddLastName(lastName) {
//       return firstName + " " + middleName + ", " + lastName;
//     };
//   };
// }


var _default = BuildFullName;
exports["default"] = _default;