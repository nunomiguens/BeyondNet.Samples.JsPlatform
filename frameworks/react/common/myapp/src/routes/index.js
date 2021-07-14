import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, ForwardRefPage } from "../pages";
import PureFunctions from "../concepts/Purefunctions";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/forwardref/:id?">
        <ForwardRefPage />
      </Route>
      <Route path="/functions">
        <PureFunctions />
      </Route>
    </Switch>
  );
};

export default Routes;
