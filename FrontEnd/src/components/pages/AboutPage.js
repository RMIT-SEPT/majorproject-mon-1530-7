import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Image4 from '../images/img_4.png';

class AboutPage extends Component {
    render() {
        return (
            <Jumbotron id="jumbotron-custom">
                <Container>
                    <Row>
                        <Col id="col-main4">
                            <img src={Image4} alt="main_img" height="600"></img>
                        </Col>
                        <Col id="col-main5">
                            <h2 className="h2-main">About Us</h2>
                            <p>We pride ourselves on our simple and easy-to-use API for all our
                                clients. Our API will allow your business to thrive and grow further,
                                allowing your to manage everything in one place. From bookings to employees,
                                our API has everything under control for you. Our stress-free user interface
                                will provide all the necessary resources and tools for you anywhere, anytime.
                            </p>

                            <h4 className="h5-main2">Want to find out more?</h4>
                            <p>Our large range of features will be sure to boost your business as
                                well as improve productivity for you and your brand. Keep on track
                                with your bookings and manage everything with our API.
                            </p>
                            <Link to="/signup"><button className="btn-filled" id="align-btn">Get Started</button></Link>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default AboutPage;
