import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';


class PastBookingsRows extends Component {

    constructor(props){
        super(props);
    }

    renderPastBookings(){

        if(!this.props.loading && this.props.pastBookings.length > 0){

            return(

                <div>
            
                    {this.props.pastBookings.map((pastBooking) => (

                        <Row>
                            <Col>{pastBooking.product.name}</Col>
                            <Col>{pastBooking.staff_member.name}</Col>
                            <Col>{pastBooking.appointment_time.substring(8, 10) + "/" + 
                                pastBooking.appointment_time.substring(5, 7) + "/" + 
                                pastBooking.appointment_time.substring(0, 4)}</Col>
                            
                            {(pastBooking.appointment_time.substring(11 ,13) === "12") &&
                                <Col>{"12"+ pastBooking.appointment_time.substring(13) + " pm"}</Col>} 
                            {(pastBooking.appointment_time.substring(11 ,13) === "13") &&
                                <Col>{"1" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "14") &&
                                <Col>{"2" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "15") &&
                                <Col>{"3" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "16") &&
                                <Col>{"4" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "17") &&
                                <Col>{"5" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "18") &&
                                <Col>{"6" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "19") &&
                                <Col>{"7" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "20") &&
                                <Col>{"8" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "21") &&
                                <Col>{"9" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "22") &&
                                <Col>{"10" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "23") &&
                                <Col>{"11" + pastBooking.appointment_time.substring(13) + " pm"}</Col>}
                            
                            {(pastBooking.appointment_time.substring(11 ,13) === "00") &&
                            <Col>{"12" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "01") &&
                            <Col>{"1" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "02") &&
                            <Col>{"2" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "03") &&
                            <Col>{"3" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "04") &&
                            <Col>{"4" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "05") &&
                            <Col>{"5" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "06") &&
                            <Col>{"6" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "07") &&
                            <Col>{"7" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "08") &&
                            <Col>{"8" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "09") &&
                            <Col>{"9" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "10") &&
                            <Col>{"10" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            {(pastBooking.appointment_time.substring(11 ,13) === "11") &&
                            <Col>{"11" + pastBooking.appointment_time.substring(13) + " am"}</Col>}
                            <br/><br/>
                        </Row>
                        
                    ))}
                </div>
            );
        }else if(!this.props.loading){
            return <p>No bookings fulfilled as of yet</p>;
        }else{
            return(
                <Spinner animation="border" role="status">
                </Spinner>
            );
        }
    }

    render(){
        return (
            <div>
                {this.renderPastBookings()}
            </div>
        )
    }
}

PastBookingsRows.propTypes = {

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

export default PastBookingsRows;
