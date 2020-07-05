import React from "react";

import Aux from "../../hoc/ReactAux";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Aux>
      <div>ToolBar, SideDrawer, BackDrop</div>
      <main className={classes.Content}>{props.children}</main>
      <footer>Footer</footer>
    </Aux>
  );
};

export default Layout;
