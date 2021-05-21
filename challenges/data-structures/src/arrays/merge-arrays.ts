//merged sorted arrays

const mergeArrays = (arr1: number[], arr2: number[]) =>
  arr1.concat(arr2).sort((a, b) => a - b);

console.log(mergeArrays([1, 3, 5, 7, 9], [4, 2, 6, 8, 10]));
