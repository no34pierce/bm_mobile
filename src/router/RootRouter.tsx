import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TeamRouter from "./TeamRouter";
import HomeRouter from "./HomeRouter";

function RootRouter() {
  return (
    <Switch>
      <Route path="/home" component={HomeRouter} />
      <Route path="/myTeam" component={TeamRouter} />
      <Redirect path="/*" to="/home" />
    </Switch>
  );
}

export default RootRouter;
