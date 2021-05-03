import { fromEvent, interval } from "rxjs";
import { concatMap, take } from "rxjs/operators";

//Streams
const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<KeyboardEvent>(document, "click");

click$.pipe(concatMap(() => interval$)).subscribe(console.log);
