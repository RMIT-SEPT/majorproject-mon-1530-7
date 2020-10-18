import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import BookingsList from "../layouts/BookingsList";

class CustomerPastBookingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Jumbotron id="jumbotron-cus-book-page">
        <Container>
          <h2 className="h2-center">Booking History</h2>
        </Container>
        <Container className="customerBookingPageContainer">
          <BookingsList card />
        </Container>
      </Jumbotron>
    );
  }
}

CustomerPastBookingsPage.defaultProps = {};

export default CustomerPastBookingsPage;
