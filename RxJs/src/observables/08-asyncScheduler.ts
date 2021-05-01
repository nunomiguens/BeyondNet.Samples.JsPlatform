import { asyncScheduler } from "rxjs";

const hello = () => console.log("Hello World");

const hello2 = (name) => console.log(`Hello ${name}`);

const hello3 = ({ firstname, lastname }) =>
  console.log(`Hello ${firstname}, ${lastname}`);

asyncScheduler.schedule(hello, 2000);

asyncScheduler.schedule(hello2, 2000, "Beto");

asyncScheduler.schedule(hello3, 2000, {
  firstname: "Alberto",
  lastname: "Arroyo Raygada",
});

const subs$ = asyncScheduler.schedule(
  function (state) {
    console.log(state);

    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//   subs$.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs$.unsubscribe(), 6000);
