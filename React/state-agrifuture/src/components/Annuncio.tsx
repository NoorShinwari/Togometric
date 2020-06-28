import * as React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import germanyFlag from "../assets/images/flag-germany.svg";
import italianFlag from "../assets/images/flag-italy.svg";

export interface AnnuncioProps {
  activity: string;
  requisiti: string;
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
              <Col xs={12} md={6} lg={6}>
                <Card.Text className="font-weight-bold">Attività</Card.Text>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Card.Text>{props.activity}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Card.Text className="font-weight-bold">
                  Orario di lavoro
                </Card.Text>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Card.Text>Full-time</Card.Text>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6} lg={6}>
                <Card.Text className="font-weight-bold">
                  Orario settimanale
                </Card.Text>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Card.Text>{Math.floor(Math.random() * 7)} giorni</Card.Text>
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
                <Card.Text>Previsto pranzo e cena</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Text>Previsto posto letto</Card.Text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Row>
              <Col>
                <Card.Title className="text-dark">Requisiti</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Text>{props.requisiti}</Card.Text>
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
                <Card.Text>
                  Dovresti comprendere almeno una di queste lingue.
                </Card.Text>
              </Col>
            </Row>
            <Row>
              <Col xs={2} md={2}>
                <Image src={germanyFlag} width="30" height="30" />
              </Col>
              <Col xs={2} md={2}>
                <Image src={italianFlag} width="30" height="30" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Annuncio;
