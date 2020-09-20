import React, { Component } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from "prop-types";

class ServiceCard extends Component {
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

  renderServices() {
    if (!this.props.loading && this.props.services.length > 0) {
      return (
        <ButtonGroup toggle vertical>
          {this.props.services.map((service) => (
            <ToggleButton
              key={service.id}
              type="radio"
              variant="outline-primary"
              checked={this.state.idValue === service.id}
              name="radio"
              value={service.id}
              size="lg"
              onChange={(e) => this.handleSelection(e.currentTarget.value)}
            >
              {service.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      );
    } else if (!this.props.loading) {
      // TODO: better empty state
      return <p>No services found</p>;
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
          <Card.Title>Services</Card.Title>
          <br />
          {this.renderServices()}
        </Card.Body>
      </Card>
    );
  }
}

ServiceCard.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      duration: PropTypes.number,
    })
  ),
};

export default ServiceCard;
