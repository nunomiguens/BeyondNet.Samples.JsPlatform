function sum(a, b) {
  return a + b;
}

function min(a, b) {
  return a - b;
}

function* testing(a, b) {
  yield (x = sum(a, b));
  console.log(a);
  console.log(b);
  console.log(x);
  yield min(x, b);
}

const App = () => {
  let iterator = testing(2, 2);
  console.log(iterator.next());
  console.log(iterator.next());
};
