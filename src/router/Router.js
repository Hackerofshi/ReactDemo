import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Detail from "../pages/detail";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/pages/detail" component={Detail}></Route>
    </Switch>
  </HashRouter>
);
export default BasicRoute;
