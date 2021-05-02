import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acum: number, current: number) => {
  return acum + current;
};

const tot = numbers.reduce(totalReducer, 0);
console.log("Total array", tot);

interval(500)
  .pipe(take(3), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });
