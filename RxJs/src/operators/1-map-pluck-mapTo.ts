import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5).subscribe((val) => console.log(val * 10));

range(1, 5)
  .pipe(map<number, number>((val) => val * 10))
  .subscribe(console.log);

// NOTE: MAP
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyup$.pipe(map((event) => event.code));

keyup$.subscribe((val) => console.log("map", val));

keyupCode$.subscribe((val) => console.log("map", val));

// NOTE: PLUCK
const keyupPluck$ = keyup$.pipe(pluck("key"));

const keyupPluck1$ = keyup$.pipe(pluck("target", "baseURI"));

keyupPluck$.subscribe((val) => console.log("pluck", val));

keyupPluck1$.subscribe((val) => console.log("pluck1", val));

// NOTE: MAPTO

const changeToUpper = (value: string) => {
  return `Key pressed: ${value.toUpperCase()}`;
};

const keyupMapTo$ = keyup$.pipe(mapTo<KeyboardEvent, string>(`Key pressed`));

keyupMapTo$.subscribe((val) => console.log("mapTo", val));
