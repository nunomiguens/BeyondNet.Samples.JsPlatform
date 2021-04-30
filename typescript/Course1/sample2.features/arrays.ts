const carMakers = ['ford', 'toyota', 'chevy'];
const carsByMake = [['f150'], ['corolla']];
const carsByMakeDef: string[][] = [];

// Help with inferences when extracting values
const car = carMakers[0];
const carDrop = carMakers.pop();

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
