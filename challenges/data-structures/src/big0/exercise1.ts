// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input: []) {
  let a = 10; // 0(1)
  a = 50 + 3; // 0(1)

  for (let i = 0; i < input.length; i++) {
    // 0(n)
    anotherFunction(); // 0(n)
    let stranger = true; // 0(n)
    a++; // 0(n)
  }
  return a; // 0(1)
}

// BIG O(3 + 4n)

function anotherFunction() {}

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input: number) {
  let a = 5; // 0(1)
  let b = 10; // 0(1)
  let c = 50; // 0(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // 0(n)
    let y = i + 2; // 0(n)
    let z = i + 3; // 0(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // 0(n)
    let q = j * 2; // 0(n)
  }
  let whoAmI = "I don't know"; // 0(1)
}

// BIG O(4 + 5n)
