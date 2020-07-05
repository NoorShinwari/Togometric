import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useHistory } from "react-router-dom";
import "./Home.scss";

interface HomeProps {
  id: string;
}
let Home: React.SFC<HomeProps> = (props) => {
  const [name, setName] = useState<string>("");

  const history = useHistory();
  function anotherPage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    history.push("/next", name);
    console.log(name);
  }
  return (
    <Container className="mb-3">
      <Row>
        <Col>
          <Card className="rounded-pill shadow">
            <Card.Body>
              <Form className="px-3" onSubmit={anotherPage}>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    xs={12}
                    md={Col}
                    controlId="formGridHow"
                    className="mb-md-0"
                  >
                    <Form.Label className="text-muted">
                      <strong>COSA CERCHI?</strong>
                    </Form.Label>
                    <Form.Control
                      className="rounded-pill"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    xs={12}
                    md={Col}
                    controlId="formGridWhere"
                    className="mb-md-0"
                  >
                    <Form.Label className="text-muted">
                      <strong>DOVE CERCHI?</strong>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value="Choose..."
                      className="rounded-pill"
                      readOnly
                    >
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    xs={12}
                    md={Col}
                    controlId="formGridDuty"
                    className="mb-md-0"
                  >
                    <Form.Label className="text-muted">
                      <strong>CHE POSIZIONE?</strong>
                    </Form.Label>
                    <Form.Control className="rounded-pill" readOnly />
                  </Form.Group>
                  <Button
                    variant="warning"
                    type="submit"
                    className="rounded-pill btn-search"
                  >
                    <FontAwesomeIcon icon={faSearch} size="3x" color="white" />
                  </Button>
                </Form.Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
