import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { endWith, startWith } from "rxjs/operators";

const loadingDiv = document.createElement("div");
loadingDiv.classList.add("loading");
loadingDiv.innerHTML = "Loading...";

const body = document.querySelector("body");

body.append(loadingDiv);

ajax
  .getJSON("https://reqres.in/api/users/2?delay=3")
  .pipe(startWith(true))
  .subscribe((resp) => {
    resp === true
      ? body.append(loadingDiv)
      : body.querySelector(".loading").remove();

    console.log(resp);
  });
