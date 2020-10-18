import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from '../UserProfile';
import ManageEmpRows from './layouts/ManageEmpRows';
import StaffCard from './layouts/StaffCard';
import Card from 'react-bootstrap/Card';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            staff: [], 
            loadingStaff: true,
        };
    }

    componentDidMount() {
        this.fetchStaff();
    }

    fetchStaff() {
        fetch(process.env.REACT_APP_API_URL + "staff", {
          headers: {
            Authorization: UserProfile.getToken(),
          },
        })
          .then((response) => response.json())
          .then((data) =>
            this.setState({ staff: data["staff"], loadingStaff: false })
          )
          .catch((e) => console.log(e));
      }

    renderEmpTable() {
        return(
            <ManageEmpRows 
            staff={this.state.staff}
            loading={this.state.loadingStaff}
            />
        );
    }

    renderStaffCard() {
        return(
            <StaffCard
                staff={this.state.staff}
                loading={this.state.loadingStaff}
                onSelect={this.props.onSelect}
            />
        );
    }

    render() {
        if(this.props.cusbooking && !this.props.empmanage){
            return(
                <Card
                    className="shadow p-3 mb-5 bg-white rounded"
                    border="light"
                    style={{ width: "68rem" }}
                >
                {this.renderStaffCard()}
                </Card>
            );
        }else if(!this.props.cusbooking && this.props.empmanage){
            return(
                this.renderEmpTable()
            );
        }
    }
}

StaffList.propTypes = {
    cusbooking: PropTypes.bool,
    empmanage: PropTypes.bool,
    onSelect: PropTypes.func,
  };
  

export default StaffList;
