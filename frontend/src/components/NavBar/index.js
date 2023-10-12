import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart3 } from "react-icons/bs";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
import React from "react";

import "./NavBar.css";

function NavBar() {
  const items = useSelector((state) => state.cart);
  return (
    <Navbar className="bor-der p-3 nav-fix" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">MOHAMMAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
