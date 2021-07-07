import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import NotFound from "../components/core/404";

const Index = () => {
  return (
    <Switch>
      <Route component={LandingPage} exact path={["/"]} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Index;
