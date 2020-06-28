import React, { ReactElement } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import headerImage from "../assets/images/logo.svg";
import headerLengFlag from "../assets/images/flag-italy.svg";
interface Props {
  history: any;
}

function SiteNav({ history }: Props): ReactElement {
  return (
    <>
      <Navbar bg="transparent" expand="sm">
        <img
          alt=""
          src={headerImage}
          width="150"
          height="60"
          className="d-inline-block align-top"
        />
        <Nav className="ml-auto">
          <Nav.Link href="/home">
            <img
              alt=""
              src={headerLengFlag}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar bg="transparent" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <span className="text-muted">
            <strong>Benvenuto Mario Rossi</strong>
          </span>
          <Nav className="ml-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/next">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/last">Action</NavDropdown.Item>
              <NavDropdown.Item href="/home">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/next">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/home">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default withRouter(SiteNav);

export { SiteNav as UnwrappedSiteNav };
