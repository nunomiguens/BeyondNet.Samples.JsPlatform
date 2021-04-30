// Variables
let apples: number = 5;
let speed: string = 'fast';
let shouldNull: null = null;

// Built in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];

// Classes
class Car {}

let car: Car;

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1. Function that return an any type
const json1 = '{"x":10, "y":20}';
const coordinates1 = JSON.parse(json1);
console.log(coordinates1);

coordinates1.jsjsjs; // Is not catching errors due to TS is getting an ANY type from JSON.parse()

const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
coordinates.x;

//2. when we declare a variable in onle line and initializate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3. When we have a variable that can not be inferred correctly
let myNumbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < myNumbers.length; index++) {
  if (myNumbers[index] > 0) {
    numberAboveZero = numbers[index];
  }
}
