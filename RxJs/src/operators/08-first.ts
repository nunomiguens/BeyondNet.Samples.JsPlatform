import { first, pluck, tap } from "rxjs/operators";
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

// click$
//   .pipe(
//     tap(console.log),
//     pluck("clientY"),
//     first((val) => val >= 150)
//   )
//   .subscribe({
//     next: (val) => console.log("next:", val),
//     complete: () => console.log("complete"),
//   });

// Best form
click$
  .pipe(
    tap(console.log),
    first<MouseEvent>((val) => val.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });
