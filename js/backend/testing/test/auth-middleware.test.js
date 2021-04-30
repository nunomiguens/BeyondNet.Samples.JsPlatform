const authMiddleware = require("../middleware/is-auth");

const expect = require("chai").expect;
const jwt = require("jsonwebtoken");

describe("Auth Middleware", () => {
  it("should throw error id no authorization header is present", () => {
    const req = {
      get: headerName => {
        return null;
      }
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw(
      "Not authenticated."
    );
  });

  it("should throw an error if the authorization header is only one string", () => {
    const req = {
      get: headerName => {
        return "foo";
      }
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });

  it("should throw an error if the token cannot verify", () => {
    const req = {
      get: headerName => {
        return "Bearer foo";
      }
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).to.throw();
  });

  it("should yield a userId after decoding the token", () => {
    const req = {
      get: headerName => {
        return "Bearer foo";
      }
    };
    jwt.verify = () => {
      return {
        userId: "foo"
      };
    };
    authMiddleware.bind(this, req, {}, () => {});
    expect(req).to.have.property("userId");
  });
});
