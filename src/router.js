import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/404/PageNotFound";
import Layout from "./components/layout/layout.js";
import { index } from "./constants/route-paths";
import App from "./containers/app/App";

const Router = ({ match }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path={index} component={App} exact />
        <Route component={PageNotFound} exact />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
