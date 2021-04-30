import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("APP", () => {
  it("Should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
    console.log(wrapper.debug());
  });
});
