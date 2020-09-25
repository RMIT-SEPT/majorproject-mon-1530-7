import React, { Component } from 'react';
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";

class CustomerDashboardBookingHistorySection extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            // TODO --> MAYBE REMOVE
            // userId: null,
        };
    }

    renderBookingHistory(){

        if(!this.props.loading && this.props.pastBookings.length > 0 
            && this.props.pastBookings.status === "completed"){

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
                    {this.props.pastBookings.map((pastBooking) => (
                        //TODO FORMAT DATE AND TIME ACCORDINGLY
                        <tr>
                            <td>{pastBooking.product.name}</td>
                            <td>{pastBooking.staff_member.name}</td>
                            <td>{pastBooking.appointment_time}</td>
                            <td>{pastBooking.appointment_time}</td>
                        </tr>
                    ))}
                  </tbody>
                </table>
            );
        }else if(!this.props.loading){
            return <p>No past bookings</p>;
        }else{
            return(
                <Spinner animation="border" role="status">
                </Spinner>
                
            );
            // return <p>No past bookings</p>;
        }
    }
    
    render() {
        return (
            <div>
                {this.renderBookingHistory()}
            </div>
        )
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
                    duration: PropTypes.string
                })
            ),
            appointment_time: PropTypes.string,
        })
    ),
    loading: PropTypes.bool,
};

export default CustomerDashboardBookingHistorySection;
