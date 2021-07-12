import { distinct, skip, takeUntil } from "rxjs/operators";
import { from, fromEvent, interval, of } from "rxjs";

const numbers$ = of(1, 1, 1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 0);

numbers$.pipe(distinct()).subscribe({
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
    type: "villain",
    name: "Sthepenwolf",
  },
];

from(heroes)
  .pipe(distinct((heroe) => heroe.name))
  .subscribe(console.log);
