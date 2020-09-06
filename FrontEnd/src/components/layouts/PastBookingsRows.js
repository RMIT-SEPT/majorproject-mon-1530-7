import React from 'react';
import {Row, Col} from 'react-bootstrap';

function PastBookingsRows() {

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

    return (
        <div>
            
            {bookings.map(booking => (

                <Row>
                    <Col>{booking.product.name}</Col>
                    <Col>{booking.staff_member.name}</Col>
                    <Col>{booking.appointment_time.substring(8, 10) + "/" + 
                        booking.appointment_time.substring(5, 7) + "/" + 
                        booking.appointment_time.substring(0, 4)}</Col>
                    <Col>{booking.appointment_time.substring(11)}</Col>
                    <br/><br/>
                </Row>
                
            ))}

        </div>
    )
}

export default PastBookingsRows;
