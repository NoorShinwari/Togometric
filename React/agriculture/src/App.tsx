import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Card1 from "./components/Card";
import Info from "./components/info";
import Annuncio from "./components/Annuncio";
import { Container, Row, Col, ProgressBar, CardDeck } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col lg={12}>
              <Card1 />
            </Col>
          </Row>
          <Row>
            <Col lg={7}>
              <Row></Row>
              <Annuncio />
            </Col>
            <Col lg={5}>
              <Info />
            </Col>
          </Row>
        </Col>
      </Row>
      <ProgressBar variant="warning" now={60} />
    </Container>
  );
}

export default App;
