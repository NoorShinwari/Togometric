import * as React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUser,
  faIndustry,
  faMapMarkerAlt,
  faClock,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

export interface CardProps {}

const Card1: React.SFC<CardProps> = () => {
  const history = useHistory();
  function backPageHandler() {
    history.push("/last");
  }

  return (
    <Card
      className="shadow p-2 mb-3 text-muted"
      style={{ borderRadius: "2rem 2rem" }}
    >
      <Card.Body>
        <Row>
          <Col className="text-left">
            <Row>
              <Col>
                <Card.Title className="text-dark">RACCOGLITORE</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col md={1} lg={1}>
                <FontAwesomeIcon icon={faUser} className="text-primary" />
              </Col>
              <Col md={5} lg={5}>
                <Card.Text>Raccoglitore</Card.Text>
              </Col>
            </Row>

            <Row>
              <Col md={1}>
                <FontAwesomeIcon icon={faIndustry} className="text-primary" />
              </Col>
              <Col md={3}>
                <Card.Text>Multi Spa</Card.Text>
              </Col>
              <Col md={1}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-warning"
                />
              </Col>
              <Col md={3}>
                <Card.Text>Torino</Card.Text>
              </Col>
            </Row>
          </Col>
          <Col className="text-right">
            <Row>
              <Col md={{ offset: 7, span: 3 }} lg={{ offset: 9 }}>
                <Button
                  onClick={backPageHandler}
                  size="sm"
                  variant="primary"
                  className="rounded-pill"
                >
                  CONDITATI
                </Button>
              </Col>
              <Col md={2} lg={{ offset: 1, span: 1 }}>
                <FontAwesomeIcon icon={faStar} className="text-warning" />
              </Col>
            </Row>

            <Row>
              <Col md={{ offset: 5, span: 1 }} lg={{ offset: 5, span: 1 }}>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="text-primary"
                />
              </Col>
              <Col md={5} lg={6}>
                <Card.Text>Da oggi a fino a 20.02.2020</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col md={{ offset: 5, span: 1 }} lg={{ offset: 8 }}>
                <FontAwesomeIcon icon={faClock} className="text-primary" />
              </Col>
              <Col md={5} lg={{ span: 2 }}>
                <Card.Text>Oggi</Card.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Card1;
