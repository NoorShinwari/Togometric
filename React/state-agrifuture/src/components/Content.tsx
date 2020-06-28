import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Routes from "../routes/Routes";

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Routes />
      </Switch>
    );
  }
}
