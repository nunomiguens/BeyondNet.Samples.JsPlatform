import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>React Common Samples</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/forwardref">ForwardRef</Link>
        </li>
        <li>
          <Link to="/functions">Functions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
