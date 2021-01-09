import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Detail from "../pages/Details";
import DemoAnt from "../pages/DemoNav";
import DemoList from "../pages/DemoList";
import DemoLayout from "../pages/DemoLayout";
import MainLayout from "./MainLayout";

const BasicRoute = () => (
  <HashRouter>
    {/* <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/pages/detail" component={Detail}></Route>
      <Route exact path="/pages/DemoAnt" component={DemoAnt}></Route>
    </Switch> */}
    <MainLayout>
      <Switch>
        <Route
          path="/"
          render={() => (
            <Switch>
              <Route path="/App" component={App} />
              <Route path="/pages/Detail" component={Detail}></Route>
              <Route path="/pages/DemoAnt" component={DemoAnt}></Route>
              <Route path="/pages/DemoList" component={DemoList}></Route>
              <Route path="/pages/DemoLayout" component={DemoLayout}></Route>
            </Switch>
          )}
        />
      </Switch>
    </MainLayout>
    {/* <Switch>
      <Route
        path="/"
        render={() => (
          <Switch>
        
          </Switch>
        )}
      />
    </Switch> */}
  </HashRouter>
);
export default BasicRoute;
