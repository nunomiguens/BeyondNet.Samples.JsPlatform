import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((x) => {
      console.log("before", x);
      return 100;
    }),
    map((val) => val * 10),
    tap({
      next: (val) => console.log("after", val),
      complete: () => console.log("completed"),
    })
  )
  .subscribe((val) => console.log("subs", val));
