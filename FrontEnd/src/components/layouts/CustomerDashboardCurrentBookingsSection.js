import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";

class CustomerDashboardCurrentBookingsSection extends Component {

    constructor(props){
        super(props);
        this.state = {
            // TODO --> MAYBE REMOVE
            // userId: null,
        };
    }

    renderCurrentBookings(){

        if(!this.props.loading && this.props.currentBookings.length > 0 
            && this.props.currentBookings.status === "upcoming"){

            return(
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
                    {this.props.currentBookings.map((currentBooking) => (
                        //TODO FORMAT DATE AND TIME ACCORDINGLY
                        <tr>
                            <td>{currentBooking.product.name}</td>
                            <td>{currentBooking.staff_member.name}</td>
                            <td>{currentBooking.appointment_time}</td>
                            <td>{currentBooking.appointment_time}</td>
                            <button className="cancel-btn">Cancel Booking</button>
                        </tr>
                    ))}
                  </tbody>
                </table>
            );
        }else if(!this.props.loading){
            return <p>No upcoming bookings</p>;
        }else{
            return(
                <Spinner animation="border" role="status">
                </Spinner>
                
            );
            // return <p>No upcoming bookings</p>;
        }
    }

    render() {
        return (
            <div>
                {this.renderCurrentBookings()}
            </div>
        )
    }
}

CustomerDashboardCurrentBookingsSection.propTypes = {

    currentBookings: PropTypes.arrayOf(
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
                    duration: PropTypes.string
                })
            ),
            appointment_time: PropTypes.string,
        })
    ),
    loading: PropTypes.bool,
};

export default CustomerDashboardCurrentBookingsSection;
