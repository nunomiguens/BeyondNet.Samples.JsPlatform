import { interval, range } from "rxjs";
import {
  map,
  reduce,
  startWith,
  take,
  takeUntil,
  takeWhile,
} from "rxjs/operators";

(() => {
  const inicio = 7;
  const countdown$ = interval(700).pipe(
    take(inicio + 1),
    map((i) => inicio - i)
  );

  countdown$.subscribe(console.log); // =
})();
