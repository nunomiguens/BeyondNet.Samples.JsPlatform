import { from } from "rxjs";
import { map, tap } from "rxjs/operators";

(() => {
  const names = [
    "batman",
    "joker",
    "doble cara",
    "pingüino",
    "hiedra venenosa",
  ];

  const capitalize = (name: string) =>
    name.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );

  // Replace this FOR with RxJs
  // for (let name of names) {
  //   console.log(capitalize(name));
  // }

  from(names).pipe(map(capitalize)).subscribe(console.log);
})();
