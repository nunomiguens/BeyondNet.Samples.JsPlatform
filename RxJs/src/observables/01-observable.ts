import { Observable, Observer } from "rxjs";

const obs$ = new Observable<string>((subs) => {
  subs.next("Hi BETO");

  subs.next("Why are u so fat?");

  // Do you want force an error?
  // const a = undefined;
  // a.nombre === "Beto";

  subs.complete();

  subs.next("that's none of your business :)");
});

obs$.subscribe(console.log);

obs$.subscribe(
  (value) => console.log(`next: ${value}`),
  (err) => {
    console.warn(`error: ${err}`);
  },
  () => console.info("Completed")
);

const observer: Observer<string> = {
  next: (value) => console.log(`Observer - next: ${value}`),
  error: (error) => console.warn(`Observer - error: ${error}`),
  complete: () => console.info("Observer - Completed"),
};

obs$.subscribe(observer);
