import { from } from "rxjs";
import { filter, map, reduce } from "rxjs/operators";

(() => {
  const datos = [1, 2, "foo", 3, 5, 6, "bar", 7, 8];

  from(datos)
    .pipe(
      filter<any>((val) => !isNaN(val)),
      reduce((acc, curr) => acc + curr, 0)
    )
    .subscribe(console.log); // La salida debe de ser 32
})();
