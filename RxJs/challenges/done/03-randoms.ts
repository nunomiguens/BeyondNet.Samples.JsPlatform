import { interval, Subject } from "rxjs";
import { take, map } from "rxjs/operators";

(() => {
  // == Do not touch it ====================
  const clock$ = interval(1000).pipe(
    take(5),
    map((val) => Math.round(Math.random() * 100))
  );
  // ============================================

  // Should emit the same value
  const subject$ = new Subject();

  clock$.subscribe(subject$);

  subject$.subscribe((val) => console.log("obs1", val));
  subject$.subscribe((val) => console.log("obs2", val));

  // clock$.subscribe((val) => console.log("obs1", val));
  // clock$.subscribe((val) => console.log("obs2", val));
})();
