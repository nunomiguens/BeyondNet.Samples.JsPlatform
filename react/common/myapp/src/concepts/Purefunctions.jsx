import React, { useState } from "react";
import { CalculatePure, CalculateImpure } from "../utils/pureFunctions";

const PureFunctions = () => {
  const [totalPure, setTotalPure] = useState(0);
  const [totalImpure, setTotalImpure] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleValue1 = event => {
    setValue1(event.target.value);
  };

  const handleValue2 = event => {
    setValue2(event.target.value);
  };

  const handleTotalPure = () => {
    setTotalPure(CalculatePure(value1, value2));
  };

  const handleTotalImpure = () => {
    setTotalImpure(CalculateImpure(value1, value2));
  };

  return (
    <div>
      <h1>Pure vs Impure Functions</h1>
      <div>
        <input type="text" onChange={handleValue1} value={value1} />
        <input type="text" onChange={handleValue2} value={value2} />
      </div>

      <div>
        <button type="button" onClick={handleTotalPure}>
          Pure
        </button>
        <button type="button" onClick={handleTotalImpure}>
          Impure
        </button>
      </div>

      <div>
        <h2>Results</h2>
        <p>The pure value calculated was: {totalPure}</p>
        <p>The impure value calculated was: {totalImpure}</p>
      </div>
    </div>
  );
};

export default PureFunctions;
