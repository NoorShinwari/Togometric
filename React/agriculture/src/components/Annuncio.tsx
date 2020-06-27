import * as React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

export interface AnnuncioProps {}

const Annuncio: React.SFC<AnnuncioProps> = () => {
  return (
    <Card className="shadow p-2 mb-3" style={{ borderRadius: "2rem 2rem" }}>
      <Card.Body>
        <Row>
          <Col>
            <Row>
              <Col>
                <Card.Title>Annuncio</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Text>Attività</Card.Text>
              </Col>
              <Col>
                <Card.Text>Raccoglitore</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Text>Orario di lavoro</Card.Text>
              </Col>
              <Col>
                <Card.Text>Full-time</Card.Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card.Text>Orario settimanale</Card.Text>
              </Col>
              <Col>
                <Card.Text>Settimana di 5 giorni</Card.Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card.Title>Vitto e Alloggio</Card.Title>
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

        <Row>
          <Col>
            <Row>
              <Col>
                <Card.Title>Requisiti</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Text>Non sono richieste qualifiche</Card.Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card.Title>Competenze Linguistiche</Card.Title>
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
              <Col>Flag Flag</Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Annuncio;
