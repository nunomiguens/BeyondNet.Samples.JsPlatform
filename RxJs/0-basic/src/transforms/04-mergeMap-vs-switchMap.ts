import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";

//Streams
const click$ = fromEvent<KeyboardEvent>(document, "click");
const interval$ = interval(1000);

// click$.pipe(mergeMap(() => interval$)).subscribe(console.log);

click$.pipe(switchMap(() => interval$)).subscribe(console.log);
