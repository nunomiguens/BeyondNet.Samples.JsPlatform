import React from "react";
import FancyButton from "../components/ForwardRef/FancyButton";

const ForwardRefPage = () => {
  const ref = React.createRef();

  return (
    <div>
      <FancyButton ref={ref}>Click Me!</FancyButton>
    </div>
  );
};

export default ForwardRefPage;
