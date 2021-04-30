export default interface IReportable {
  summary(): string;
}

class Car implements IReportable {
  name: string;
  year: number;
  broken: boolean;
  summary(): string {
    return '';
  }
}

const Drink = {
  name: 'CocaCola',
  summary(): string {
    return `This is ${this.name}`;
  },
};

const OldCivicCar: Car = {
  name: 'civic',
  year: 2000,
  broken: true,

  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printObject = (entity: IReportable) => {
  console.log(entity.summary());
};

printObject(OldCivicCar);
printObject(Drink);
