import { asyncScheduler, of, range } from "rxjs";

// NOTE: Those are not sequential, those are emitions
// const src$ = range(-5, 10);
// const src$ = range(5);
const src$ = range(1, 5, asyncScheduler);

console.log("Start");
const subs$ = src$.subscribe(console.log);
console.log("end");
