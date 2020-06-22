import React from "react";
import Card from "./card";
import Annuncio from "./annuncio";
import Info from "./info";

const Layout = () => {
  return (
    <div className="colr">
      <div className="row " style={{ width: "80%" }}>
        <Card />
      </div>
      <div className="row" style={{ width: "80%" }}>
        <div className="col">
          <Annuncio />
        </div>
        <div className="col">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Layout;
