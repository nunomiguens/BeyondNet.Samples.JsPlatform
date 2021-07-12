import { mergeAll, pluck } from "rxjs/operators";
import { combineLatest, concat, from, interval, merge, timer } from "rxjs";
import { map, take } from "rxjs/operators";

// a1
// a2
// b2
// b3
// c3
// c4
// d4
// d5
// e5

(() => {
  const characters = ["a", "b", "c", "d", "e"];
  const numbers = [1, 2, 3, 4, 5];

  const characters$ = interval(1000).pipe(
    map((i) => characters[i]),
    take(characters.length)
  );

  const numbers$ = timer(500, 1000).pipe(
    map((i) => numbers[i]),
    take(numbers.length)
  );

  combineLatest([characters$, numbers$])
    .pipe(map(([x, y]) => x + y))
    .subscribe(console.log);
})();
