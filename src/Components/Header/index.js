import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Image from 'react-bootstrap/Image';
import './index.css';

function Header(props){
  return(
    <header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Brand href="#home">CleanM4</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <NavDropdown title="Cleaning" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Please</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Hire</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Me</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Thanks</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Office" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">You</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Won't</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Regret it</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#deets">FAQ</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Partner
      </Nav.Link>

    </Nav>



  </Navbar.Collapse>




</Navbar>
    </header>
  );
}
export default Header;
