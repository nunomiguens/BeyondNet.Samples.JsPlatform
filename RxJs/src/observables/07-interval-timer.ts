import { interval, timer } from "rxjs";

const interval$ = interval(1000);

// const timer$ = timer(2000, 1000);

const observer = {
  next: (value) => console.log("next", value),
  complete: () => console.log("complete"),
};

// console.log("Start");
// const subs$ = interval$.subscribe(observer);
// console.log("end");

const todayAt5 = new Date();

todayAt5.setSeconds(todayAt5.getSeconds() + 5);

const timer$ = timer(todayAt5);

const subs1$ = timer$.subscribe(observer);
