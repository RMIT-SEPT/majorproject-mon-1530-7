import React, { Component } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";

class StaffCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue: null,
    };

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(value) {
    this.setState({ idValue: value });
    this.props.onSelect(value);
  }

  renderStaff() {
    if (!this.props.loading && this.props.staff.length > 0) {
      return (
        <ButtonGroup toggle vertical>
          {this.props.staff.map((employee) => (
            <ToggleButton
              key={employee.id}
              type="radio"
              variant="outline-primary"
              checked={this.state.idValue === employee.id}
              name="radio"
              value={employee.id}
              size="lg"
              onChange={(e) => this.handleSelection(e.currentTarget.value)}
            >
              {employee.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      );
    } else if (!this.props.loading) {
      // TODO: better empty state
      return <p>No employees found</p>;
    } else {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
  }

  render() {
    return (
      <Card
        className="shadow p-3 mb-5 bg-white rounded"
        border="light"
        style={{ width: "68rem" }}
      >
        <Card.Body>
          <Card.Title>Staff</Card.Title>
          <br />

          {this.renderStaff()}
        </Card.Body>
      </Card>
    );
  }
}

StaffCard.propTypes = {
  staff: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default StaffCard;
