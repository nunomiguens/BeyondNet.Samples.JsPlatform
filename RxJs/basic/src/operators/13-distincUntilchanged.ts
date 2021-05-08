import { distinctUntilChanged } from "rxjs/operators";
import { from, of } from "rxjs";

const numbers$ = of(1, 2, 3, 1, 4, 4, 4, 5, 2, 6, 7, 8, 9, 0);

numbers$.pipe(distinctUntilChanged()).subscribe({
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
});

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
    type: "heroe",
    name: "cyborg",
  },
  {
    type: "heroe",
    name: "Wonder Woman",
  },
];

from(heroes)
  .pipe(distinctUntilChanged((old, curr) => old.name === curr.name))
  .subscribe(console.log);
