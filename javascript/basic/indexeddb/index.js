let localDatabase;

//Selectors
const form = document.querySelector("form"),
  todo = document.querySelector("#todo"),
  description = document.querySelector("#description"),
  details = document.querySelector("#details"),
  todos = document.querySelector("#todolist");

document.addEventListener("DOMContentLoaded", () => {
  let createDB = window.indexedDB.open("todos", 1);

  //Error
  createDB.onerror = error => console.log(`An error was ocurred ${error}`);

  createDB.onsuccess = () => {
    localDatabase = createDB.result;
  };

  //Schema. It will be execute once a time. When the database is create
  createDB.onupgradeneeded = e => {
    let db = e.target.result;

    let objectStore = db.createObjectStore("todos", {
      keyPath: "key",
      autoIncrement: true
    });

    objectStore.createIndex("todo", "todo", { unique: false });
    objectStore.createIndex("description", "description", { unique: false });
    objectStore.createIndex("details", "details", { unique: false });
  };

  form.addEventListener("submit", addTodo);

  function addTodo(e) {
    e.preventDefault();

    const newTodo = {
      todo: todo.value,
      description: description.value,
      details: details.value
    };

    let transaction = localDatabase.transaction(["todos"], "readwrite");
    let objectStore = transaction.objectStore("todos");
    let request = objectStore.add(newTodo);

    request.onsuccess = () => form.reset();
    transaction.oncomplete = () => console.log("Todo added");
    transaction.onerror = error => console.log(error);

    console.log(request);
  }
});

export const main = () => {
  //Wait for DOM content ready
};
