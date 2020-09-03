import React, {useState} from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import customerBookingPageEmployeeData from './customerBookingPageEmployeeData';


function EmployeeCard({
    id,
    user_id,
    services,
    preferredName
}) {

    const [nameValue, setNameValue] = useState('');

    // const {name} = props;

    return (

        <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
        
        <Card.Body>

        <Card.Title>Available Employees</Card.Title><br/>

            <ButtonGroup toggle vertical>

                {customerBookingPageEmployeeData.map(employee => (
                    <ToggleButton 
                        key={employee.preferredName}
                        type="radio" 
                        variant="outline-primary" 
                        checked={nameValue === employee.preferredName}
                        name="radio"
                        value={employee.preferredName}
                        size="lg"
                        onChange={(e) => setNameValue(e.currentTarget.value)}>
                        {employee.preferredName}
                    </ToggleButton>
                ))}
            
            </ButtonGroup>
            
            </Card.Body>

            </Card>

    );
}

export default EmployeeCard;
