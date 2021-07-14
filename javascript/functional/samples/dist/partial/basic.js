"use strict";

var _require = require('../currying/basic'),
    curryGreetings = _require.curryGreetings;

var partialMorningGreetings = curryGreetings('Good Morning');
exports.partialMorningGreetings = partialMorningGreetings;