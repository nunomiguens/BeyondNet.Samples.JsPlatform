import { asyncScheduler, fromEvent } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  pluck,
  throttleTime,
} from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(throttleTime(2000)).subscribe({
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
});

const input = document.createElement("input");
const body = document.querySelector("body");

body.append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(console.log);
