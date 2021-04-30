"use strict";

function curryGreetings(greeting) {
  return function (name) {
    return "".concat(greeting, " ").concat(name);
  };
}

exports.curryGreetings = curryGreetings;