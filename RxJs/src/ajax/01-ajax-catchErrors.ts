import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";

const url = "https://api.github.com/users?per_page=5";

const errorHandler = (resp: Response) => {
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  return resp;
};

const showingError = (err: AjaxError) => {
  console.warn("error:", err.message);
  return of({});
};

// const fetchPromise = fetch(url)
//   .then(errorHandler)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.warn("Error:", err));

ajax(url)
  .pipe(pluck("response"), catchError(showingError))
  .subscribe((users) => console.log("users:", users));
