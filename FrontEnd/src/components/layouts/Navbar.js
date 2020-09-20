import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import "../../index.css";
import { Link } from 'react-router-dom';

function NavigationBar(props) {
  const loggedIn = props.loggedIn;

  if (loggedIn) {
    return (
      <Navbar fixed="top" bg="white" variant="light">
        <Navbar.Brand href="/">[ Booking System ]</Navbar.Brand>
        <Nav className="mr-auto">

          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Link to="/manage-emp">
          <button className="btn-border">Employees</button>
        </Link>
        <Link to="/dashboard">
          <button className="btn-border">Dashboard</button>
        </Link>
        <Link to="/account">
          <button className="btn-border">Account</button>
        </Link>
        <Link to="/customer-booking-page">
          <button className="btn-border">Book Now</button>
        </Link>
      </Navbar>
    );
  }

  if (!loggedIn) {
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
}

export default NavigationBar;