import React from "react";
import { Switch, Route } from "react-router";
import Feed from "../page/feedPage/Feed";
import Detail from "../page/detailPage/Detail";

const AppRouter = () => (
  <Switch>
    <Route path="/detail" component={Detail} />
    <Route path="/" component={Feed} />
  </Switch>
);

export default AppRouter;
