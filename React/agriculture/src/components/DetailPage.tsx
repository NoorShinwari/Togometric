import React from "react";
import Card1 from "./Card";
import Annuncio from "./Annuncio";
import Info from "./Info";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const DetailPage = () => {
  return (
    <Container className="pb-3">
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
      <ProgressBar variant="success" now={60} />
    </Container>
  );
};

export default DetailPage;
