import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import "../../index.css";
import {Link} from 'react-router-dom';

function NavigationBar() {
  return (
    <>
      <Navbar fixed="top" bg="white" variant="light">
        <Navbar.Brand href="/">[ Booking System ]</Navbar.Brand>
        <Nav className="mr-auto">
        
          <Nav.Link href="/">Home</Nav.Link>
        
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Link to="/login">
          <button className="btn-border">Log In</button>
        </Link>
        <button className="btn-filled">Sign Up</button>
      </Navbar>
    </>
  );
}

export default NavigationBar;