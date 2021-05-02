import { takeUntil } from "rxjs/operators";
import { fromEvent, interval } from "rxjs";

const button = document.createElement("button");
button.innerHTML = "Stop Timer";

const body = document.querySelector("body");
body.append(button);

const count$ = interval(1000);
const click$ = fromEvent<MouseEvent>(button, "click");

count$.pipe(takeUntil(click$)).subscribe({
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
});
