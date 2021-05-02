import { from, fromEvent, range } from "rxjs";
import { filter, map, pluck } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

range(20, 30).pipe(
  filter((val, i) => {
    console.log("index", i);
    return val % 2 === 1;
  })
);
// .subscribe(console.log);

type HeroType = {
  type: string;
  name: string;
};

const heroes: HeroType[] = [
  {
    type: "heroe",
    name: "Batman",
  },
  {
    type: "heroe",
    name: "Wonder Woman",
  },
  {
    type: "heroe",
    name: "Flash",
  },
  {
    type: "heroe",
    name: "aquaman",
  },
  {
    type: "heroe",
    name: "cyborg",
  },
  {
    type: "villain",
    name: "Sthepenwolf",
  },
];

from(heroes)
  .pipe(filter((heroe) => heroe.type === "heroe"))
  .subscribe(console.log);

// const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").subscribe(
//   console.log
// );

const keyup1$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  pluck("code"),
  filter((key) => key === "Enter")
);

keyup1$.subscribe(console.log);
