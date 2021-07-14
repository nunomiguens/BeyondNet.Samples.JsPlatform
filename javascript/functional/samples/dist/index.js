"use strict";

var _core = require("./core");

var _require = require('./currying/basic'),
    curryGreetings = _require.curryGreetings;

var _require2 = require('./partial/basic'),
    partialMorningGreetings = _require2.partialMorningGreetings;

var _require3 = require('./ramda/basic'),
    ramdaGreettings = _require3.ramdaGreettings;

console.log('1. Executing a simple greeting using a normal function');
console.log((0, _core.greetings)('Good Morning', 'Beto'));
console.log('2. Executing a simple greeting using a curry function');
var friends = ['Beto', 'Ronald', 'Luiggi', 'JC'];
var friendGreetings = friends.map(curryGreetings('Good Morning'));
console.log(friendGreetings);
console.log('3. Executing a simple greating using a partial application function');
var morningGreeting = partialMorningGreetings('Johana Sunohara');
console.log(morningGreeting);
console.log('4. Ramda');
var ramdaGreetSimpleFunction = ramdaGreettings('Good Night', 'Aitana');
var ramdaGreetCurry = friends.map(ramdaGreettings('Good Morning'));
var ramdaGreetAfternoonPartial = ramdaGreettings('Good Afternoon');
var ramdaGreetAfternoon = ramdaGreetAfternoonPartial('Beto');
console.log(ramdaGreetSimpleFunction);
console.log(ramdaGreetCurry);
console.log(ramdaGreetAfternoon);