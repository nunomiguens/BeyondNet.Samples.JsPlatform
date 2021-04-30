export const CalculatePure = (a, b) => parseInt(a) + parseInt(b);

let number = 7;

export const CalculateImpure = (a, b) =>
  parseInt(number) + parseInt(a) + parseInt(b);
