import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";

function HomeRouter() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect path="/home/*" to="/home" />
    </Switch>
  );
}

export default HomeRouter;
