import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Jumbotron } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SiteNav from "./components/SiteNav";
import Content from "./components/Content";

function App() {
  return (
    <Container fluid>
      <nav>
        <SiteNav />
        <Header />
      </nav>
      <Jumbotron className="bg-transparent" fluid>
        <main>
          <Content />
        </main>
        <footer>
          <Footer />
        </footer>
      </Jumbotron>
    </Container>
  );
}

export default App;
