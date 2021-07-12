import { fromEvent } from "rxjs";

// NOTE: DOM events

const src$1 = fromEvent<MouseEvent>(document, "click");
const src$2 = fromEvent<KeyboardEvent>(document, "keyup");

const observer$ = {
  next: (val) => console.log("next value", val),
};

src$1.subscribe(({ x, y }) => {
  console.log(`Position: ${x},${y}`);
});

src$2.subscribe((evento) => {
  console.log(evento.key);
});
