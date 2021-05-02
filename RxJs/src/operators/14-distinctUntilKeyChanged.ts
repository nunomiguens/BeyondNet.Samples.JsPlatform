import { distinctUntilKeyChanged } from "rxjs/operators";
import { from, of } from "rxjs";

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

from(heroes).pipe(distinctUntilKeyChanged("name")).subscribe(console.log);
