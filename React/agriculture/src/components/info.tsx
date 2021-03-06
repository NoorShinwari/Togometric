import * as React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  faBookReader,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface InfoProps {}

const Info: React.SFC<InfoProps> = () => {
  return (
    <Card
      className="shadow p-2 pb-3 mb-3"
      style={{ borderRadius: "2rem 2rem" }}
    >
      <Card.Body>
        <Row className="text-muted">
          <Col>
            <Row>
              <Col>
                <Card.Title className="text-dark">INFO DI CONTATTO</Card.Title>
              </Col>
            </Row>
            <Row className="m-2 mb-4">
              <Col>
                <FontAwesomeIcon icon={faBookReader} size="3x" />
              </Col>
              <Col>
                <Row>
                  <Card.Text>Riferimento</Card.Text>
                </Row>
                <Row>
                  <Card.Text>Jason Statam</Card.Text>
                </Row>
              </Col>
            </Row>
            <Row className="m-3 mb-4">
              <Col>
                <FontAwesomeIcon icon={faMobileAlt} size="3x" />
              </Col>
              <Col>
                <Row>
                  <Card.Text>Numero di telefono</Card.Text>
                </Row>
                <Row>
                  <Card.Text>+39 349 427 209</Card.Text>
                </Row>
              </Col>
            </Row>
            <Row className="m-2 mb-4">
              <Col>
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </Col>
              <Col>
                <Row>
                  <Card.Text>Email</Card.Text>
                </Row>
                <Row>
                  <Card.Text className="text-primary h6">
                    Jason@statam.com
                  </Card.Text>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Info;
