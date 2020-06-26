import * as React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUser,
  faIndustry,
  faMapMarkerAlt,
  faCalendarWeek,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export interface CardProps {}

const Card1: React.SFC<CardProps> = () => {
  return (
    <Container>
      <Card className="shadow p-2 mb-2" style={{ borderRadius: "2rem 2rem" }}>
        <Card.Body>
          <Row>
            <Col className="text-left">
              <Row>
                <Col>
                  <Card.Title>RACCOGLITORE</Card.Title>
                </Col>
              </Row>
              <Row>
                <Col md={1} lg={1}>
                  <FontAwesomeIcon icon={faUser} color="blue" />
                </Col>
                <Col md={5} lg={5}>
                  <Card.Text>Raccoglitore</Card.Text>
                </Col>
              </Row>

              <Row>
                <Col md={1}>
                  <FontAwesomeIcon icon={faIndustry} color="blue" />
                </Col>
                <Col md={3}>
                  <Card.Text>Multi Spa</Card.Text>
                </Col>
                <Col md={1}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} color="orange" />
                </Col>
                <Col md={3}>
                  <Card.Text>Torino</Card.Text>
                </Col>
              </Row>
            </Col>
            <Col className="text-right">
              <Row>
                <Col md={{ offset: 7, span: 3 }} lg={{ offset: 9 }}>
                  <Button size="sm" variant="primary" className="rounded-pill">
                    CONDITATI
                  </Button>
                </Col>
                <Col md={2} lg={{ offset: 1, span: 1 }}>
                  <FontAwesomeIcon icon={faStar} spin color="orange" />
                </Col>
              </Row>

              <Row>
                <Col md={{ offset: 5, span: 1 }} lg={{ offset: 5 }}>
                  <FontAwesomeIcon icon={faCalendarWeek} color="blue" />
                </Col>
                <Col md={5} lg={5}>
                  <Card.Text>Da oggi a fino a 20.02.2020</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col md={{ offset: 5, span: 1 }} lg={{ offset: 8 }}>
                  <FontAwesomeIcon icon={faClock} color="blue" />
                </Col>
                <Col md={5} lg={{ span: 2 }}>
                  <Card.Text>Oggi</Card.Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Card1;
