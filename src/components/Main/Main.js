import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import Login from "../User/Login/Login";
import Register from "../User/Register/Register";
import Dashboard from "../Dashboard/Dashboard";

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}
