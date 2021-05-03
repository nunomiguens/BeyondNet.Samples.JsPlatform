import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";
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

text$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>("target", "value"),
    map<string, Observable<GitHubUsers>>((text) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    mergeAll<GitHubUsers>(),
    pluck<GitHubUsers, GithubUser[]>("items")
  )
  .subscribe((user) => showUsers(user));
