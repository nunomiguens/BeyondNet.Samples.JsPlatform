"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var constraints = {
  username: {
    presence: true,
    exclusion: {
      within: ["nicklas"],
      message: "'%{value}' is not allowed"
    }
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters"
    }
  }
};
var _default = constraints;
exports["default"] = _default;