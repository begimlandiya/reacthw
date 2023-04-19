import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Bangtan Boys</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <a
                target="_blank"
                href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%B4_%D0%B8_%D0%BD%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D0%B9_BTS"
              >
                <Nav.Link>Awards</Nav.Link>
              </a>
              <NavDropdown title="members" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">ЧИМИН</NavDropdown.Item>
                <NavDropdown.Item href="#action4">ЧОНГУК</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">НАМДЖУН</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
