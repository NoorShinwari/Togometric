import React from "react";
import Card from "./card";
import Annuncio from "./annuncio";
import Info from "./info";

const Layout = (props) => {
  console.log(props);
  return (
    <div style={{ padding: "40px" }}>
      <Card />
      <div className="row p-3">
        <Annuncio />
        <Info />
      </div>
    </div>
  );
};

export default Layout;
