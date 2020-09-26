import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import "../../index.css";
import { Link } from 'react-router-dom';
import UserProfile from '../../UserProfile'

function NavigationBar() {
  console.log(Boolean(UserProfile.getLoggedIn()))
  if (UserProfile.getLoggedIn() === true) {
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
        <Link to="/booking">
          <button className="btn-border">Book Now</button>
        </Link>
      </Navbar>
    );
  }

  else  {
    return (
      <>
        <Navbar fixed="top" bg="white" variant="light">
          <Navbar.Brand href="/">[ Booking System ]</Navbar.Brand>
          <Nav className="mr-auto">

            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Link to="/login"><button className="btn-border">Log In</button></Link>
          <Link to="/signup"><button className="btn-filled">Sign Up</button></Link>

        </Navbar>
      </>
    );
  }
}

export default NavigationBar;