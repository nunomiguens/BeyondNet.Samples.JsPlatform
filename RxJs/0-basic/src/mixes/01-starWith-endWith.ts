import { of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";

const numbers$ = of(1, 2, 3).pipe(startWith(0), endWith(4));

numbers$.subscribe(console.log);
