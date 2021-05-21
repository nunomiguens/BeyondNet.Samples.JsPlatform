//create a function that reverse a string:
// Hi my name is Beto should: oteB si eman my yH

function reverseString(str: string) {
  if (!str || str.length < 2 || typeof str !== "string")
    throw new Error("Value must be a string");

  return str.split("").reverse().join("");
}

const reverseString2 = (str: string) => str.split("").reverse().join("");

const reverseString3 = (str: any) => [...str].reverse().join("");

console.log(reverseString("Hi my name is Beto"));
console.log(reverseString2("Hi my name is Beto"));
console.log(reverseString3("Hi my name is Beto"));
