import { from, of } from "rxjs";

const obs$ = of<number>(1, 2, 3, 4, 5, 6);

const observer = {
  next: (value) => console.log("next", value),
  complete: () => console.log("complete"),
};

const subs1$ = obs$.subscribe(observer);

// const src$ = from([1, 2, 3, 4, 5]);
// const src$ = from("Alberto");
const src$ = from(fetch("https://api.github.com/users/beyondnet"));

src$.subscribe(async (resp) => {
  const data = await resp.json();

  console.log(data);
});

src$.subscribe(observer);

const generator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterator$ = from(generator());

from(iterator$).subscribe(observer);
