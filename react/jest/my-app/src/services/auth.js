import { AuthenticationContext, runWithAdal } from "react-adal";
import axios from "axios";
import { getGraphToken, addAxiosInterceptor } from "../utils/auth";

const adalConfig = {
  tenant: process.env.REACT_APP_AZURE_TENANT_ID,
  clientId: process.env.REACT_APP_AZURE_AD_APP_ID,
  redirectUri: process.env.REACT_APP_MAIN_URL,
  cacheLocation: "localStorage"
};

export class AuthService {
  constructor(context) {
    this.authContext = context;
    this.isAuthorized = false;
  }

  authenticate(app) {
    runWithAdal(
      this.authContext,
      async () => {
        this.isAuthorized = await this.authorize();

        if (this.isAuthorized) addAxiosInterceptor(this.authContext);

        app({ authContext: this.authContext, isAuthorized: this.isAuthorized });
      },
      false
    );
  }

  async authorize() {
    let params = {
      groupIds: [process.env.REACT_APP_AZURE_AUTHORIZATION_GROUP_ID]
    };

    try {
      const token = await getGraphToken(this.authContext);
      const response = await axios.post(
        process.env.REACT_APP_GRAPH_MEMBERSHIP_GROUPS_URL,
        params,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      return (
        response.data && response.data.value && !!response.data.value.length
      );
    } catch (err) {
      // TODO: should log to a service or API
      // eslint-disable-next-line no-console
      console.log(err);
      return false;
    }
  }
}

const auth = app => {
  const authService = new AuthService(new AuthenticationContext(adalConfig));
  authService.authenticate(app);
};

export default auth;
