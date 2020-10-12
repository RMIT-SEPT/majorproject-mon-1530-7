import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../index.css";
import Image from './images/img_1.png';

function Body() {
  return (
    <Jumbotron id="jumbotron-custom">
      <Container>
        <Row>
          <Col xs={6} md={{ span: 6, offset: 0 }}>
            <h2 className="h2-main">Online booking system to help run your business — Join Today!</h2>
            <p>Allow booking appointments 24/7 for your clients with our simple and easy-to-use API.
              Grow your business with our user-friendly resources and tools.
            </p>
            <Link href="/signup"><button className="btn-large">Get Started</button></Link>
          </Col>
          <Col xs={6} md={{ span: 5, offset: 1 }} id="col-main">
            <img src={Image} alt="main_img" height="600"></img>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Body;