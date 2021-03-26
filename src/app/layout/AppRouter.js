import React from "react";
import { Switch, Route } from "react-router";
import Feed from "../page/feedPage/Feed";
import Detail from "../page/detailPage/Detail";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/detail" component={Detail} />
  </Switch>
);

export default AppRouter;
