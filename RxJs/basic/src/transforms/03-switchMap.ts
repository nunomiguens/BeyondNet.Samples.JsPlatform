import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { pluck, switchMap } from "rxjs/operators";
import { GithubUser } from "../interfaces/github-user.interface";
import { GitHubUsers } from "../interfaces/github-users.interface";

const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");

//References
body.append(textInput, orderList);

// helpers
const showUsers = (users: GithubUser[]) => {
  orderList.innerHTML = "";
  for (const user of users) {
    const li = document.createElement("li");
    const img = document.createElement("img");

    img.src = user.avatar_url;
    const anchor = document.createElement("a");
    anchor.href = user.html_url;
    anchor.text = "view details";
    anchor.target = "_blank";

    li.append(img);
    li.append(user.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

//Streams
const text$ = fromEvent<KeyboardEvent>(textInput, "keyup");

const url = "https://httpbin.org/delay/1?arg=";

text$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
