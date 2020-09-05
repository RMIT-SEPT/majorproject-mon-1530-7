import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../../react-datepicker_overrides.css";
import { setMinutes, setHours } from 'date-fns';

const TimeSelectorCard = () => {
    const[startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 10)

    );

    return (
        <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
            <Card.Body>
                <Card.Title>Select Time</Card.Title><br/>
                    <DatePicker className="datePickerContainer" selected={startDate}
                                onChange={date => setStartDate(date)}
                                showTimeSelect
                                includeTimes={[
                                    setHours(setMinutes(new Date(), 0), 10),
                                    setHours(setMinutes(new Date(), 30), 10),
                                    setHours(setMinutes(new Date(), 0), 11),
                                    setHours(setMinutes(new Date(), 30), 11),
                                    setHours(setMinutes(new Date(), 0), 12),
                                    setHours(setMinutes(new Date(), 30), 12),
                                    setHours(setMinutes(new Date(), 0), 13),
                                    setHours(setMinutes(new Date(), 30), 13),
                                    setHours(setMinutes(new Date(), 0), 14),
                                    setHours(setMinutes(new Date(), 30), 14),
                                    setHours(setMinutes(new Date(), 0), 15),
                                    setHours(setMinutes(new Date(), 30), 15)
                                ]}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                // dateFormat="yyyy-MM-dd, h:mm aa"
                                />
            </Card.Body>
        </Card>
    );
}

export default TimeSelectorCard;
