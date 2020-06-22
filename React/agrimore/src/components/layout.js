import React from "react";
import Card from "./card";
import Annuncio from "./annuncio";
import Info from "./info";

const Layout = () => {
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
