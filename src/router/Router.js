import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Detail from "../pages/detail";
import DemoAnt from "../pages/DemoAnt";
import MainLayout from "./MainLayout";

const BasicRoute = () => (
  <HashRouter>
    {/* <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/pages/detail" component={Detail}></Route>
      <Route exact path="/pages/DemoAnt" component={DemoAnt}></Route>
    </Switch> */}

    <Switch>
      <Route
        path="/"
        render={() => (
          <Switch>
            <MainLayout>
              <Route path="/" component={App} />
              <Route path="/pages/detail" component={Detail}></Route>
              <Route path="/pages/DemoAnt" component={DemoAnt}></Route>
            </MainLayout>
          </Switch>
        )}
      />
    </Switch>
  </HashRouter>
);
export default BasicRoute;
