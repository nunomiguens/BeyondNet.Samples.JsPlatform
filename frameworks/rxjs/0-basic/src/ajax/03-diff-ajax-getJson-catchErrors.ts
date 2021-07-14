import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://httpbin.org/delay/1";

const errorHandler = (resp: AjaxError) => {
  console.warn("error", resp.message);
  return of({ ok: false, users: [] });
};

// const obs$ = ajax.getJSON(url).pipe(catchError(errorHandler));
// const obs1$ = ajax(url).pipe(catchError(errorHandler));

// obs$.subscribe((data) => console.log("data", data));
// obs1$.subscribe((data) => console.log("data", data));

const obs$ = ajax.getJSON(url).pipe(catchError(errorHandler));
const obs1$ = ajax(url).pipe(catchError(errorHandler));

obs$.subscribe({
  next: (data) => console.log("next", data),
  error: (err) => console.warn("error", err),
  complete: () => console.log("Completed"),
});

obs1$.pipe(catchError(errorHandler)).subscribe({
  next: (data) => console.log("next", data),
  error: (err) => console.warn("error", err),
  complete: () => console.log("Completed"),
});
