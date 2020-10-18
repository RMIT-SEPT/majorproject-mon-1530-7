import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

class ManageEmpRows extends Component {
    constructor(props){
        super(props);
        this.state = {
            staffId: null,
        };
    }

    renderEmployeeRows(){
        if (!this.props.loading && this.props.staff.length > 0) {
            return(
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Employee</th>
                            <th scope="col">Working Hours</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.staff.map((employee) => (
                            <tr>
                                <td>{employee.name}</td>
                                <td>10:00 am - 5:00 pm</td>
                                <td><Link to="/emp-details"><button className="elongated-btn">View Employee Details</button></Link></td>
                                <td><Link to="/add-schedule"><button className="elongated-btn">Add Schedule</button></Link></td>
                                <td><Link to="/edit-schedule"><button className="elongated-btn">Edit Schedule</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );  
        }
        else if (!this.props.loading) {
            return <p>You currently have no employees</p>;
        } 
        else {
            return (
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderEmployeeRows()}
            </div>
        )
    }
}

export default ManageEmpRows;

ManageEmpRows.propTypes = {
    staff: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
        })
    ),
    loading: PropTypes.bool,
}