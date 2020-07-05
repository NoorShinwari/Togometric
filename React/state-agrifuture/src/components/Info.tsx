import * as React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  faBookReader,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface InfoProps {
  name: string;
  phone: string;
  email: string;
}

const Info: React.SFC<InfoProps> = (props) => {
  return (
    <Card className="shadow p-2 mb-3" style={{ borderRadius: "2rem 2rem" }}>
      <Card.Body>
        <Row className="text-muted ">
          <Col className="m-3">
            <Row className="ml-1">
              <Col>
                <Card.Title className="text-dark">INFO DI CONTATTO</Card.Title>
              </Col>
            </Row>
            <Row className="ml-2">
              <FontAwesomeIcon icon={faBookReader} size="3x" />
              <Col className="ml-2">
                <p>Riferimento</p>
                <p>{props.name}</p>
              </Col>
            </Row>
            <Row className="ml-3">
              <FontAwesomeIcon icon={faMobileAlt} size="3x" />
              <Col className="ml-3">
                <p>Numero di telefono</p>
                <p>{props.phone}</p>
              </Col>
            </Row>
            <Row className="ml-2">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
              <Col className="ml-2">
                <p>Email</p>
                <p className="text-primary h6"> {props.email}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Info;
