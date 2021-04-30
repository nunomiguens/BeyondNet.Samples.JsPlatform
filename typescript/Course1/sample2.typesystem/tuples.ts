const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = '';
pepsi[1] = false;
pepsi[2] = 1;

type DrinkBase = [string, boolean, number];

const cocacola: DrinkBase = ['brown', false, 2];
