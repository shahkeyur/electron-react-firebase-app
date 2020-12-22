import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Routes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Routes;
