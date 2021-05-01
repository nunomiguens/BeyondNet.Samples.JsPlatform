import { from, pipe } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acum: number, current: number) => acum + current;

const tot = numbers.reduce(totalReducer, 0);
console.log("Total array", tot);

from(numbers)
  .pipe(reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });

from(numbers)
  .pipe(scan(totalReducer))
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });

interface User {
  id?: string;
  auth?: boolean;
  token?: string;
  year?: number;
}

const users: User[] = [
  {
    id: "beto",
    auth: false,
    token: null,
  },
  {
    id: "beto",
    auth: true,
    token: "123",
  },
  {
    id: "beto",
    auth: true,
    token: "123456",
  },
];

const state$ = from(users).pipe(
  scan<User>(
    (acc, curr) => {
      return { ...acc, ...curr };
    },
    { year: 33 }
  )
);

const id$ = state$.pipe(map((user) => user));

id$.subscribe(console.log);
