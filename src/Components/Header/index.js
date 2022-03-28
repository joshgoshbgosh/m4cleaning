import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cleanlogo from './../../images/cleanlogo.png';
import './index.css';

function Header(props){
  return(
    <header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <NavLink to='/'>
     <Image className="cleanlogo" src={cleanlogo}width="87"height="87"className="d-inline-block align-top"to="/"/>
     </NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto nav-menu">
      <Nav.Link className="home-nav"href="#features">Home</Nav.Link>
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
