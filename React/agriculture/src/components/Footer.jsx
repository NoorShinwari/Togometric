import React, { Component } from "react";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import logoWhite from "../assets/images/logo-white.svg";
import footerBG from "../assets/images/footer-bg.svg";

export default class Footer extends Component {
  render() {
    return (
      <Jumbotron
        className="bg-transparent"
        style={{
          backgroundImage: `url(${footerBG})`,
          backgroundSize: "cover",
        }}
      >
        <Col className="p-5 text-center">
          <Container className=" mt-5 mb-n5">
            <Row className="pt-5 text-secondary">
              <Col md={3} sm={6}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  fuga quod sapiente omnis neque culpa officia laudantium,
                  commodi distinctio.
                </p>
                <p>
                  <Image src={logoWhite} />
                </p>
              </Col>
              <Col md={3} sm={6}>
                <h4>Tutti i Lavori</h4>
                <ul className="list-unstyled">
                  <li>Per Agricoltori</li>
                  <li>Per Candidati</li>
                  <li>Impressum</li>
                  <li>Privacy</li>
                  <li>Termini e Condizioni</li>
                </ul>
              </Col>
              <Col md={3} sm={6}>
                <h4>Luoghi</h4>
                <ul className="list-unstyled">
                  <li>Bassa Atesina</li>
                  <li>Bolzano</li>
                  <li>Burgraviato</li>
                  <li>Pusteria</li>
                  <li>Val Isarco</li>
                  <li>Val Venosta</li>
                </ul>
              </Col>
              <Col md={3} sm={6}>
                <h4>Categorie</h4>
                <ul className="list-unstyled">
                  <li>Coltivazione di mele</li>
                  <li>Coltivazione d'ova</li>
                  <li>Allevamento</li>
                  <li>Orticoltura</li>
                  <li>Florovivaismo</li>
                  <li>Silvicoltura</li>
                </ul>
              </Col>
            </Row>
            <hr className="bg-secondary"></hr>
            <p className="text-center text-secondary">
              &copy; {new Date().getFullYear()} With Love byToGoMetrics
            </p>
          </Container>
        </Col>
      </Jumbotron>
    );
  }
}
