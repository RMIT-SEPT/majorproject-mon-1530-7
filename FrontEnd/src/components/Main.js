import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Jumbotron } from 'react-bootstrap';
import "../index.css";

function Main() {
  return (
    <Jumbotron id="jumbotron-custom">
      <Container>
        <h2 className="h2-main">24/7 Access to online bookings</h2>
        <p>Your clients will have the ability to book whenever they need, 
          allowing your business to thrive even when you are not looking. 
          At the click of a button, our easy booking system will help you 
          gain more customers at a faster rate. Our booking system welcomes
          a variety of businesses and services, and will help reach your 
          business/service to a larger community.</p>
      </Container>
    </Jumbotron>
  )
}

export default Main;