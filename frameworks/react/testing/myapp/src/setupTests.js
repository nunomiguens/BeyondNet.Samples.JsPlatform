import Enzyme, { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
Enzyme.configure({ adapter: new Adapter() });
require("jest-fetch-mock").enableMocks();
