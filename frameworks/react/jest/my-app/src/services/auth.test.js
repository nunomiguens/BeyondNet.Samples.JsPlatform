import { getGraphToken } from "../utils/auth";
import { AuthenticationContext } from "react-adal";

const adalConfig = {
  tenant: "foo",
  clientId: "foo",
  redirectUri: "foo",
  cacheLocation: "localStorage"
};

jest.mock("../utils/auth", () => ({
  getGraphToken: () => {
    return "foo";
  }
}));

const AuthenticationContextMock = new AuthenticationContext(adalConfig);

describe("Auth Services", () => {
  it("Should get a token successfully", () => {
    let token = getGraphToken(AuthenticationContextMock);

    console.log(token);
  });
});
