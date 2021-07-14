import { interval, Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
  next: (value) => console.log(`[next]: ${value}`),
  error: (error) => console.warn(`[error]: ${error}`),
  complete: () => console.info("[completed]"),
};

const interval$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => {
    subs.next(Math.random()); //Cold Observable, because we are generating data inside the obvserbable as default
  }, 3000);

  return () => {
    clearInterval(intervalId);
    console.log("Interval destroyed");
  };
});

/* NOTE: It is an Observer type that we should use to get an reference entry point and support:
  - We can do cultiple cast
  - Support next, complete and error
  - Let us transform a Cold Observable to a Hot Observable
*/
const subject$ = new Subject<number>();
const subscription$ = interval$.subscribe(subject$);

interval$.subscribe(subject$);

const subs1$ = subject$.subscribe((value) =>
  console.log(`Subscription 1: ${value}`)
);
const subs2$ = subject$.subscribe((value) =>
  console.log(`Subscription 2: ${value}`)
);

setTimeout(() => {
  subject$.next(10); //Hot Observavble, duw to we are generating data out of the observavble
  subject$.complete();
  subscription$.unsubscribe();
}, 3500);
