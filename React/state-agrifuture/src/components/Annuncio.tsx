import * as React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import { faUtensils, faBed } from "@fortawesome/free-solid-svg-icons";
import germanyFlag from "../assets/images/flag-germany.svg";
import italianFlag from "../assets/images/flag-italy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface AnnuncioProps {
  activity: string;
  requisiti1: string;
  requisiti2: string;
  requisiti3: string;
}

const Annuncio: React.SFC<AnnuncioProps> = (props) => {
  return (
    <Card className="shadow p-2 mb-3" style={{ borderRadius: "2rem 2rem" }}>
      <Card.Body className="text-muted">
        <Row>
          <Col>
            <Row>
              <Col>
                <Card.Title className="text-dark">Annuncio</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <span className="mr-3 h6">Attività</span>
                  {props.activity}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <span className="mr-3 h6">Orario di lavoro</span>
                  Full-time
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>
                  <span className="mr-3 h6">Orario settimanale</span>
                  {Math.floor(Math.random() * 7)} giorni
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card.Title className="text-dark">Vitto e Alloggio</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <span className="mr-3">
                    <FontAwesomeIcon
                      icon={faUtensils}
                      className="text-warning"
                    />
                  </span>
                  Previsto pranzo e cena
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <span className="mr-3">
                    <FontAwesomeIcon icon={faBed} className="text-warning" />
                  </span>
                  Previsto posto letto
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>
                <Card.Title className="text-dark">Requisiti</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{props.requisiti1}</p>
                <p>{props.requisiti2}</p>
                <p>{props.requisiti3}</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card.Title className="text-dark">
                  Competenze Linguistiche
                </Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Dovresti comprendere almeno una di queste lingue.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <span className="mr-3">
                    <Image src={germanyFlag} width="30" height="30" />
                  </span>
                  <span className="mr-3">
                    <Image src={italianFlag} width="30" height="30" />
                  </span>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Annuncio;
