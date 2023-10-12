import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"

import React from "react";
import './NavBar.css'


function NavBar() {
  return (
    <Navbar className="bor-der p-3 nav-fix" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Mohammad</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{justifyContent:'right'}}>
          <Nav
            className=" d-flex w-100 justify-content-around my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <button className="btn btn-primary btn-large">Explore Programms</button>
            <Nav.Link href="#action2">Career Support</Nav.Link>
            <Nav.Link href="#action3">Success Stories</Nav.Link>
            <Nav.Link href="#action4">Study Abroad</Nav.Link>
            <Nav.Link href="#action5">Enterprise</Nav.Link>
            <Nav.Link href="#action6">For Recruiters</Nav.Link>
            <Nav.Link href="#action7">More</Nav.Link>
          </Nav>
          <Nav.Link href="#form" className="account_link">LOGIN</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
