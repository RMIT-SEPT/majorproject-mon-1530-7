import React, {useState} from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import customerBookingPageServiceData from './customerBookingPageServiceData';


function ServiceCard({
    id,
    name,
    description,
    duration,
    price
}) {

    const [nameValue, setNameValue] = useState('');

    // const {name} = props;

    return (

        <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
        
        <Card.Body>

        <Card.Title>Available Services</Card.Title><br/>

            <ButtonGroup toggle vertical>

                {customerBookingPageServiceData.map(service => (
                    <ToggleButton 
                        key={service.name}
                        type="radio" 
                        variant="outline-primary" 
                        checked={nameValue === service.name}
                        name="radio"
                        value={service.name}
                        size="lg"
                        onChange={(e) => setNameValue(e.currentTarget.value)}>
                        {service.name}
                    </ToggleButton>
                ))}
            
            </ButtonGroup>
            
            </Card.Body>

            </Card>

    );
}

export default ServiceCard;
