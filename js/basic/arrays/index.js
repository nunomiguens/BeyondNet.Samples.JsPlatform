import Data from "../arrays/data.js";

export const main = () => {
  document.getElementById("title").innerHTML = "Array Methods";
  RunForEach();
  RunFilter();
  RunMap();
  RunFind();
  RunReduce();
  RunSome();
};

function RunForEach() {
  Data.forEach(element => console.log(element.model));
}

function RunFilter() {
  console.log(Data.filter(element => element.color === "Rojo"));
}

function RunMap() {
  let result = Data.map(element => element);
  console.log(result);
}

function RunFind() {
  console.log(Data.find(element => element.color === "Rojo"));
}

function RunReduce() {
  let result = Data.reduce((total, element) => total + element.price, 0);
  console.log(result);
}

function RunSome() {
  let result = Data.some(element => element.color === "Negro");
  console.log(result);
}
