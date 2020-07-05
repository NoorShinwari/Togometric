import React from "react";
import Aux from "../../hoc/ReactAux";
const Layout = (props) => {
  return (
    <Aux>
      <div>ToolBar, SideDrawer, BackDrop</div>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </Aux>
  );
};

export default Layout;
