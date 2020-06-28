import React, { ReactElement } from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import Next from "../components/Next";
import Last from "../components/Last";

export default function Routes(): ReactElement {
  return (
    <>
      <Route component={Home} path="/" />
      <Route component={Next} path="/next" />
      <Route component={Last} path="/last" />
    </>
  );
}
