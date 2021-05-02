import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(debounceTime(2000)).subscribe({
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
});

const input = document.createElement("input");
const body = document.querySelector("body");

body.append(input);

const input$ = fromEvent(input, "keyup");

input$
  .pipe(debounceTime(1000), pluck("target", "value"), distinctUntilChanged())
  .subscribe(console.log);
