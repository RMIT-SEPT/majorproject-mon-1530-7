import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import "../index.css";

function NavigationBar() {
  return (
    <>
      <Navbar fixed="top" bg="white" variant="light">
        <Navbar.Brand href="#home">[ Booking System ]</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <button class="btn-border">Log In</button>
        <button class="btn-filled">Sign Up</button>
      </Navbar>
    </>
  );
}

export default NavigationBar;