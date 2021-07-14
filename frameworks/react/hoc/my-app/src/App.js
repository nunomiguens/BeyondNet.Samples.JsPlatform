import React from "react";

import UserProfile from "./user-profile/user-profile.component";
import UserList from "./user-list/user-list.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        name="Alberto Arroyo Raygada"
        email="beyondnet.peru@gmail.com"
        dataSource="https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
