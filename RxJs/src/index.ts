import { interval, Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
  next: (value) => console.log(`[next]: ${value}`),
  error: (error) => console.warn(`[error]: ${error}`),
  complete: () => console.info("[completed]"),
};
