import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Select from 'react-select';

const NewEmployeeForm = () => {

    return (
        <Card className="shadow p-3 mb-5 bg-white rounded"  border="light" style={{ width: '68rem' }}>
            <Card.Body>

                <textarea class="form-control form-rounded text-center" placeholder="Name"></textarea>
                
                <br />
                
                <Select
                    isMulti
                    name="Availability"
                    placeholder="Availability"
                    options={[
                        { value: "Monday", label: "Monday" },
                        { value: "Tuesday", label: "Tuesday" },
                        { value: "Wednesday", label: "Wednesday" },
                        { value: "Thursday", label: "Thursday" },
                        { value: "Friday", label: "Friday" },
                        { value: "Saturday", label: "Saturday" },
                        { value: "Sunday", label: "Sunday" }
                      ]}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </Card.Body>
        </Card>
    );
}

export default NewEmployeeForm;