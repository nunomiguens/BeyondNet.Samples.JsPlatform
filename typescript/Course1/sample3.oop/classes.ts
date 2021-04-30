import IReportable from './interfaces';

class Employee implements IReportable {
  constructor(public name: string) {}
  summary(): string {
    return `Name: ${this.name}`;
  }
}

const employee = new Employee('Alberto Arroyo Raygada');
console.log(employee.summary());

interface IBaseA {
  doSomething(): void;
}

interface IBaseB {
  getSomething(): string;
}

interface IBaseC {
  remove(): void;
}

class Base implements IBaseA, IBaseB {
  doSomething(): void {}
  getSomething(): string {
    return 'Default value';
  }
  private alter(): void {}
}

const base = new Base();
console.log(base.getSomething());

class ConcretA extends Base implements IBaseC {
  doSomething() {
    console.log('Done...');
  }
  getSomething() {
    return 'Getting...';
  }
  remove() {
    console.log('Removing...');
  }
}

const concret = new ConcretA();
concret.doSomething();
console.log(concret.getSomething());
concret.remove();
