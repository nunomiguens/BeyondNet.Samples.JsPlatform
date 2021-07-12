import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

//Streams
const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<KeyboardEvent>(document, "click");

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
