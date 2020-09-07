import React from 'react';
import {Row, Col} from 'react-bootstrap';



const bookings =[

    {
        id: '1',
        status: 'completed',
        staff_member: {
            id: '1',
            name: 'Mia Smith'
        },
        product: {
            id: '1',
            name: 'Hair-cut',
            duration: 3600
        },
        appointment_time: '2020-09-12T10:30'
    },

    {
        id: '2',
        status: 'completed',
        staff_member: {
            id: '2',
            name: 'Kai Lomia'
        },
        product: {
            id: '2',
            name: 'Shave',
            duration: 900
        },
        appointment_time: '2020-09-14T12:30'
    },

    {
        id: '3',
        status: 'completed',
        staff_member: {
            id: '3',
            name: 'Athena Jackson'
        },
        product: {
            id: '3',
            name: 'Brow-shaping',
            duration: 1800
        },
        appointment_time: '2020-09-20T14:30'
    },

]

function PastBookingsRows() {

    return (
        <div>
            
            {bookings.map(booking => (

                <Row>
                    <Col>{booking.product.name}</Col>
                    <Col>{booking.staff_member.name}</Col>
                    <Col>{booking.appointment_time.substring(8, 10) + "/" + 
                        booking.appointment_time.substring(5, 7) + "/" + 
                        booking.appointment_time.substring(0, 4)}</Col>
                    
                    {(booking.appointment_time.substring(11 ,13) === "12") &&
                        <Col>{"12"+ booking.appointment_time.substring(13) + " pm"}</Col>} 
                    {(booking.appointment_time.substring(11 ,13) === "13") &&
                        <Col>{"1" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "14") &&
                        <Col>{"2" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "15") &&
                        <Col>{"3" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "16") &&
                        <Col>{"4" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "17") &&
                        <Col>{"5" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "18") &&
                        <Col>{"6" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "19") &&
                        <Col>{"7" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "20") &&
                        <Col>{"8" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "21") &&
                        <Col>{"9" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "22") &&
                        <Col>{"10" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "23") &&
                        <Col>{"11" + booking.appointment_time.substring(13) + " pm"}</Col>}
                    
                    {(booking.appointment_time.substring(11 ,13) === "00") &&
                    <Col>{"12" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "01") &&
                    <Col>{"1" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "02") &&
                    <Col>{"2" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "03") &&
                    <Col>{"3" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "04") &&
                    <Col>{"4" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "05") &&
                    <Col>{"5" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "06") &&
                    <Col>{"6" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "07") &&
                    <Col>{"7" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "08") &&
                    <Col>{"8" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "09") &&
                    <Col>{"9" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "10") &&
                    <Col>{"10" + booking.appointment_time.substring(13) + " am"}</Col>}
                    {(booking.appointment_time.substring(11 ,13) === "11") &&
                    <Col>{"11" + booking.appointment_time.substring(13) + " am"}</Col>}
                    <br/><br/>
                </Row>
                
            ))}

        </div>
    )
}

export default PastBookingsRows;
