import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppWrapper, Container, TopBarSpace } from "./styles";
import AppTheme from "./components/theme";
import TheTopBar from "./components/layout/TheTopBar";
import CustomEvents from "./pages/CustomEvents";
import Funnels from "./pages/Funnels";
import Home from "./pages/Home";

const App = (): JSX.Element => {
  return (
    <AppTheme>
      <AppWrapper>
        <Router>
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
        </Router>
      </AppWrapper>
    </AppTheme>
  );
};

export default App;
