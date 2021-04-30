import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = "Click me!";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter NAME:
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
