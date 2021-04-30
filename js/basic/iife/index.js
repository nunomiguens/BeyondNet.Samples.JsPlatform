/*
References: 
https://blog.kevinchisholm.com/javascript/javascript-immediate-functions-basics/
https://stackoverflow.com/questions/939386/immediate-function-invocation-syntax
https://youtu.be/3cbiZV4H22c
*/

const myFunc = function() {
  console.log("1. Simple function");
};

(() => {
  console.log("2. Inmediate function (IIFE)");
})();

let myName = "Alberto Arroyo Raygada";

(function myIifeFunction(thisName) {
  console.log(`3. Sample, hello my name is ${thisName}`);
})(myName);

let favNumber;

(favNumber = function(num = 3) {
  console.log(`4. My favorite number is ${num}`);
})();

export const main = () => {
  myFunc();
  favNumber(7);
};
