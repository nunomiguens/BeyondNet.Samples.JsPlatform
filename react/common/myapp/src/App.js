import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes />
    </Router>
  );
}

export default App;
