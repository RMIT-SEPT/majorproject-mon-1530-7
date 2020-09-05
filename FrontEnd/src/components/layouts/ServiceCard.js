import React, {useState} from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function ServiceCard() {

    const [nameValue, setNameValue] = useState('');

    const products = [

        {
            id: '1',
            name: 'Hair-Straightening',
            description: 'Hair-straightening for ladies using industry-grade equipment.',
            duration: 3600,
            price: 4500
        },
        {
            id: '2',
            name: 'Cut and Blow-Dry',
            description: 'Customizable cutting service with drying.',
            duration: 2700,
            price: 3000
        },
        {
            id: '3',
            name: 'Perm',
            description: 'High-quality perm service',
            duration: 5400,
            price: 10000
        }

    ]

    return (

        <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
        
        <Card.Body>

        <Card.Title>Available Services</Card.Title><br/>

            <ButtonGroup toggle vertical>

                {products.map(service => (
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
