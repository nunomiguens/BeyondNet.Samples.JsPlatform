import { Observable, Observer } from "rxjs";

const observer: Observer<number> = {
  next: (value) => console.log(`[next]: ${value}`),
  error: (error) => console.warn(`[error]: ${error}`),
  complete: () => console.info("[completed]"),
};

const interval$ = new Observable<number>((subs) => {
  let count = 0;

  const interv = setInterval(() => {
    count++;
    subs.next(count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interv);
    console.log("Interval completed");
  };
});

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();
  console.log("Interval closed for timeout");
}, 3000);
