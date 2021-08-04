import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppWrapper, Container, TopBarSpace } from "./styles";
import AppTheme from "./components/theme";
import TheTopBar from "./components/layout/TheTopBar";
import CustomEvents from "./pages/CustomEvents";
import Funnels from "./pages/Funnels";
import Home from "./pages/Home";

import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { getAppInsights } from "./services/telemetry-service";
import TelemetryProvider from "./services/telemetry-provider";
import { APP_INSIGHT_KEY } from "./models/constants";

const App = (): JSX.Element => {
  let appInsights: ApplicationInsights;

  return (
    <AppTheme>
      <AppWrapper>
        <Router>
          <TelemetryProvider
            instrumentationKey={APP_INSIGHT_KEY}
            after={() => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              appInsights = getAppInsights();
            }}
          >
            <TheTopBar />
            <div>
              <TopBarSpace />
              <Container>
                <Switch>
                  <Route path="/customevents">
                    <CustomEvents />
                  </Route>
                  <Route path="/funnels">
                    <Funnels />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Container>
            </div>
          </TelemetryProvider>
        </Router>
      </AppWrapper>
    </AppTheme>
  );
};

export default App;
