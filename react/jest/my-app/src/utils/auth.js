import { adalGetToken } from "react-adal";
import axios from "axios";

export function getGraphToken(authContext) {
  return new Promise((resolve, reject) => {
    authContext.acquireToken("https://www.google.com", (message, token, msg) =>
      !msg ? resolve(token) : reject({ message, msg })
    );
  });
}

export function addAxiosInterceptor() {
  axios.interceptors.request.use(
    async config => {
      let token = await adalGetToken(
        this.authContext,
        "https://www.google.com"
      );
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    err => Promise.reject(err)
  );
}
