import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  pluck,
  switchMap,
  tap,
} from "rxjs/operators";

const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Submit";

form.append(inputEmail, inputPass, submitBtn);

const body = document.querySelector("body");

body.append(form);

const login = (userPassword) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPassword).pipe(
    pluck("response", "token"),
    catchError((err) => of("xxx"))
  );

const submitForm$ = fromEvent(form, "submit").pipe(
  tap((e) => e.preventDefault()),
  map((e) => ({
    email: e.target[0].value,
    password: e.target[1].value,
  })),
  exhaustMap(login)
);

submitForm$.subscribe((token) => {
  console.log(token);
});
