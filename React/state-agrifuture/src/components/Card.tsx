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

export interface CardProps {
  id: string;
  name: string;
  company: string;
  address: string;
  dateTo: string;
  dateFrom: string;
}

const Card1: React.SFC<CardProps> = (props) => {
  const history = useHistory();
  function backPageHandler(id: string) {
    history.push("/last", id);
    console.log(id);
  }

  function addDays(date: Date, days: number) {
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
  }

  const date = new Date();
  const newDate = addDays(date, 10);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = days[date.getDay()];

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
                <Card.Title className="text-dark">{props.name}</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="mr-3">
                  <FontAwesomeIcon icon={faUser} className="text-primary" />
                </span>
                {props.name}
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <span className="mr-3">
                  <FontAwesomeIcon icon={faIndustry} className="text-primary" />
                </span>
                {props.company}
              </Col>
              <Col lg={4}>
                <span className="mr-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-warning"
                  />
                </span>
                {props.address}
              </Col>
            </Row>
          </Col>
          <Col className="text-right">
            <Row>
              <Col>
                <Button
                  onClick={() => backPageHandler(props.id)}
                  size="sm"
                  variant="primary"
                  className="rounded-pill"
                >
                  CONDITATI
                </Button>
                <span className="ml-2">
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                </span>
              </Col>
            </Row>

            <Row>
              <Col>
                <span className="mr-3">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="text-primary"
                  />
                </span>
                Da {props.dateFrom} fino a {props.dateTo}
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="mr-3">
                  <FontAwesomeIcon icon={faClock} className="text-primary" />
                </span>
                {today}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Card1;
