import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";
import { format, subHours } from "date-fns";

class CustomerDashboardBookingHistorySection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO --> MAYBE REMOVE
      // userId: null,
    };
  }

  renderBookingHistory() {
    if (!this.props.loading && this.props.pastBookings.length) {
      return (
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Employee</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
            </tr>
          </thead>

          <tbody>
            {this.props.pastBookings.map((pastBooking) => (
              <tr>
                <td>{pastBooking.product.name}</td>
                <td>{pastBooking.staff_member.name}</td>
                <td>
                  {format(
                    subHours(new Date(pastBooking.appointment_time), 11),
                    "d/MM/yyyy"
                  )}
                </td>
                <td>
                  {format(
                    subHours(new Date(pastBooking.appointment_time), 11),
                    "h:mm a"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (!this.props.loading) {
      return <p>No past bookings</p>;
    } else {
      return <Spinner animation="border" role="status"></Spinner>;
    }
  }

  render() {
    return <div>{this.renderBookingHistory()}</div>;
  }
}

CustomerDashboardBookingHistorySection.propTypes = {
  pastBookings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      status: PropTypes.string,
      staff_member: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
        })
      ),
      product: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          duration: PropTypes.string,
        })
      ),
      appointment_time: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};

export default CustomerDashboardBookingHistorySection;
