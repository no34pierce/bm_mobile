import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TeamList from "../pages/TeamList";
import TeamView from "../pages/TeamView";

function TeamRouter() {
  return (
    <Switch>
      <Route path="/myTeam" exact>
        <Redirect to="/myTeam/list" />
      </Route>
      <Route path="/myTeam/list" component={TeamList} />
      <Route path="/myTeam/view" component={TeamView} />
      {/* <Redirect path="/myTeam/*" to="/myTeam" /> */}
    </Switch>
  );
}

export default TeamRouter;
