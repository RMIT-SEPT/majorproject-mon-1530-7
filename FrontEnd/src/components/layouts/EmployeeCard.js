import React, {useState} from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function EmployeeCard() {

    const [nameValue, setNameValue] = useState('');

    const staff = [

        {
            id: '1',
            name: 'Mia'
        },
        {
            id: '2',
            name: 'Athena'
        },
        {
            id: '3',
            name: 'Kai',
        }

    ]

    return (

        <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
        
        <Card.Body>

        <Card.Title>Available Employees</Card.Title><br/>

            <ButtonGroup toggle vertical>

                {staff.map(employee => (
                    <ToggleButton 
                        key={employee.name}
                        type="radio" 
                        variant="outline-primary" 
                        checked={nameValue === employee.name}
                        name="radio"
                        value={employee.name}
                        size="lg"
                        onChange={(e) => setNameValue(e.currentTarget.value)}>
                        {employee.name}
                    </ToggleButton>
                ))}
            
            </ButtonGroup>
            
            </Card.Body>

            </Card>

    );
}

export default EmployeeCard;
