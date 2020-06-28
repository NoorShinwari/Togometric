import React, { ReactElement } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import headerBg from "../assets/images/header-bg.png";
import "./Header.scss";

export default function Header(): ReactElement {
  return (
    <Jumbotron className="bg-transparent mb-0">
      <img
        alt=""
        src={headerBg}
        className="header-bg d-inline-block align-top"
      />
      <h1 className="text-warning">
        <strong>Buyashaka!</strong>
      </h1>
      <p className="w-50">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary" className="rounded-pill">
          LOREM PIPPUM
        </Button>
      </p>
    </Jumbotron>
  );
}
