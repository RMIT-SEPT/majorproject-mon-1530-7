import React, { Component } from "react";
import { Row, Col, Card, Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import { format, subHours } from "date-fns";

import UserProfile from "../../UserProfile";

class BookingsList extends Component {
  headings = ["Service", "Employee", "Date", "Time"];

  constructor(props) {
    super(props);
    this.state = { bookings: [], loading: true };
  }

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings() {
    const statusQuery = this.props.upcoming
      ? "pending,confirmed"
      : "completed,not_completed";
    const fetchBookingsURL = new URL("bookings", process.env.REACT_APP_API_URL);
    fetchBookingsURL.searchParams.append("user", UserProfile.getUID());
    fetchBookingsURL.searchParams.append("status", statusQuery);
    fetch(fetchBookingsURL, {
      headers: {
        Authorization: UserProfile.getToken(),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          bookings: data["bookings"],
          loading: false,
        });
      });
  }

  formatDate(appointment_time) {
    return format(subHours(new Date(appointment_time), 11), "d/MM/yyyy");
  }

  formatTime(appointment_time) {
    return format(subHours(new Date(appointment_time), 11), "h:mm a");
  }

  renderCancelButton() {
    return (
      <Button variant="outline-primary" className="cancel-btn">
        Cancel
      </Button>
    );
  }

  renderTable() {
    return (
      <table className="table table-borderless">
        <thead>
          <tr>
            {this.headings.map((heading) => (
              <th scope="col" key={heading}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.product.name}</td>
              <td>{booking.staff_member.name}</td>
              <td>{this.formatDate(booking.appointment_time)}</td>
              <td>{this.formatTime(booking.appointment_time)}</td>
              {this.props.upcoming && <td>{this.renderCancelButton()}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  renderCard() {
    return (
      <Card
        className="shadow p-3 mb-5 bg-white rounded"
        border="light"
        style={{ width: "68rem" }}
      >
        <Card.Header as="h6">
          <Row>
            {this.headings.map((heading) => (
              <Col key={heading}>{heading}</Col>
            ))}
          </Row>
        </Card.Header>
        <Card.Body>
          {this.state.bookings.map((booking) => (
            <Row key={booking.id}>
              <Col>{booking.product.name}</Col>
              <Col>{booking.staff_member.name}</Col>
              <Col>{this.formatDate(booking.appointment_time)}</Col>
              <Col>{this.formatTime(booking.appointment_time)}</Col>
              {this.props.upcoming && <Col>{this.renderCancelButton()}</Col>}
              <br />
              <br />
            </Row>
          ))}
        </Card.Body>
      </Card>
    );
  }

  render() {
    if (
      !this.state.loading &&
      this.state.bookings &&
      this.state.bookings.length > 0
    ) {
      return this.props.card ? this.renderCard() : this.renderTable();
    } else if (!this.state.loading) {
      return (
        <p>
          {this.props.upcoming
            ? "No upcoming bookings"
            : "No historic bookings"}
        </p>
      );
    } else {
      return <Spinner animation="border" role="status"></Spinner>;
    }
  }
}

BookingsList.propTypes = {
  upcoming: PropTypes.bool,
  card: PropTypes.bool,
};

export default BookingsList;
