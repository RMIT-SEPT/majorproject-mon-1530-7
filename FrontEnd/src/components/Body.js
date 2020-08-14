import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Jumbotron } from 'react-bootstrap';
import "../index.css";

function Body() {
  return (
    <Jumbotron id="jumbotron-custom">
      <Container>
        <h2 class="h2-main">Online booking system to help run your business — Join Today!</h2>
        <p>Allow booking appointments 24/7 for your clients with our simple and easy-to-use API</p>
        <button class="btn-large">Get Started</button>
      </Container>
    </Jumbotron>
  )
}

export default Body;