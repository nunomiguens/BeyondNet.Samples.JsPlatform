import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://httpbin.org/delay/1";

// ajax
//   .post(
//     url,
//     { name: "beyondnet" },
//     {
//       "Content-Type": "application/json",
//       token: "123",
//     }
//   )
//   .subscribe(console.log);

ajax({
  url,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    token: "demo",
  },
});
