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

        if(!this.props.loading && this.props.pastBookings.length > 0){

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
                        <tr>
                            <td>{pastBooking.product.name}</td>
                            <td>{pastBooking.staff_member.name}</td>
                            <td>{pastBooking.appointment_time.substring(8, 10) + "/" + 
                            pastBooking.appointment_time.substring(5, 7) + "/" + 
                            pastBooking.appointment_time.substring(0, 4)}</td>

                            {(pastBooking.appointment_time.substring(11 ,13) === "12") &&
                            <td>{"12"+ pastBooking.appointment_time.substring(13) + " pm"}</td>} 
                        {(pastBooking.appointment_time.substring(11 ,13) === "13") &&
                            <td>{"1" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "14") &&
                            <td>{"2" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "15") &&
                            <td>{"3" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "16") &&
                            <td>{"4" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "17") &&
                            <td>{"5" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "18") &&
                            <td>{"6" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "19") &&
                            <td>{"7" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "20") &&
                            <td>{"8" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "21") &&
                            <td>{"9" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "22") &&
                            <td>{"10" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        {(pastBooking.appointment_time.substring(11 ,13) === "23") &&
                            <td>{"11" + pastBooking.appointment_time.substring(13) + " pm"}</td>}
                        
                            {(pastBooking.appointment_time.substring(11 ,13) === "00") &&
                            <td>{"12" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "01") &&
                            <td>{"1" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "02") &&
                            <td>{"2" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "03") &&
                            <td>{"3" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "04") &&
                            <td>{"4" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "05") &&
                            <td>{"5" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "06") &&
                            <td>{"6" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "07") &&
                            <td>{"7" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "08") &&
                            <td>{"8" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "09") &&
                            <td>{"9" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "10") &&
                            <td>{"10" + pastBooking.appointment_time.substring(13) + " am"}</td>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "11") &&
                            <td>{"11" + pastBooking.appointment_time.substring(13) + " am"}</td>}

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
