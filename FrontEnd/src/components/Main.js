import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../index.css";
import Image2 from './images/img_2.png';
import Image3 from './images/img_3.png';
import Icon1 from './images/icon_1.png';
import Icon2 from './images/icon_2.png';
import Icon3 from './images/icon_3.png';

function Main() {
  return (
    <Jumbotron id="jumbotron-alt">
      <Container>
        <Row>
          <Col id="col-main6">
            <img src={Image2} alt="main_img" height="600"></img>
          </Col>
          <Col id="col-main2">
            <h2 className="h2-main">24/7 Access to online bookings</h2>
            <p>
              Your clients will have the ability to book whenever they need,
              allowing your business to thrive even when you are not looking. At
              the click of a button, our easy booking system will help you gain
              more customers at a faster rate. Our API welcomes a variety of
              businesses and services, and will help reach your business to a
              larger community and grow your brand.
            </p>
          </Col>
        </Row>
        <Row id="row-center-main">
          <Col xs={6} md={{ offset: 0 }}>
            <h2 className="h2-center">Our Features</h2>
          </Col>
        </Row>
        <Row id="row-center">
          <Col xs={6} md={{ offset: 0 }}>
            <img src={Icon1} alt="icon_1" height="150"></img>
          </Col>
          <Col xs={6} md={{ offset: 1 }}>
            <img src={Icon2} alt="icon_2" height="150"></img>
          </Col>
          <Col xs={6} md={{ offset: 1 }}>
            <img src={Icon3} alt="icon_3" height="150"></img>
          </Col>
        </Row>
        <Row id="row-center">
          <Col xs={6} md={{ offset: 0 }}>
            <h4 className="h4-main2">Ease-of-use</h4>
          </Col>
          <Col xs={6} md={{ offset: 1 }}>
            <h4 className="h4-main2">Rapid Growth</h4>
          </Col>
          <Col xs={6} md={{ offset: 1 }}>
            <h4 className="h4-main2">Track Bookings</h4>
          </Col>
        </Row>
        <Row id="row-center">
          <Col xs={6} md={{ offset: 0 }}>
            <p>
              Our simple and easy-to-use API is great for beginners and
              starters. Design is intuitive and will improve productivity.
            </p>
          </Col>
          <Col xs={6} md={{ offset: 1 }}>
            <p>
              Our API will help grow and further advance your business in the
              long run. Produce noticeable results with us.
            </p>
          </Col>
          <Col xs={6} md={{ offset: 1 }}>
            <p>
              With our user-friendly API, you will be able to quickly and easily
              track current and upcoming bookings.
            </p>
          </Col>
        </Row>
        <Row id="row-main">
          <Col xs={6} md={{ span: 6, offset: 0 }} id="col-main3">
            <h2 className="h2-main">Get Started With Us Today!</h2>
            <p>
              Join us today and kickstart your business ASAP. We guarantee rapid
              business growth and improved management with our API. We offer
              many other features available for your business, so get started to
              find out more!
            </p>
            <Link to="/signup">
              <button className="btn-large">Get Started</button>
            </Link>
          </Col>
          <Col xs={6} md={{ span: 4, offset: 0 }}>
            <img src={Image3} alt="main_img" height="600"></img>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Main;