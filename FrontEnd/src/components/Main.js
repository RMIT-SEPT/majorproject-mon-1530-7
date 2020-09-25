import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import "../index.css";
import Image from './images/img_11.png';

function Main() {
  return (
    <Jumbotron id="jumbotron-alt">
      <Container>
        <Row>
          <Col xs={6} md={{ span: 4, offset: -1 }}>
            <img src={Image} alt="main_img" height="600"></img>
          </Col>
          <Col xs={6} md={{ span: 6, offset: 2 }} id="col-main2">
            <h2 className="h2-main">24/7 Access to online bookings</h2>
            <p>Your clients will have the ability to book whenever they need,
            allowing your business to thrive even when you are not looking.
            At the click of a button, our easy booking system will help you
            gain more customers at a faster rate. Our booking system welcomes
            a variety of businesses and services, and will help reach your
          business/service to a larger community.</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Main;