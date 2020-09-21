import React, { Component } from "react";
import ServiceCard from "../layouts/ServiceCard";
import StaffCard from "../layouts/StaffCard";
import TimeSelectorCard from "../layouts/TimeSelectorCard";
import { Container, Jumbotron, CardDeck, Form, Button } from "react-bootstrap";

class CustomerBookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false,
      showSuccess: false,
      services: [],
      staff: [],
      loadingServices: true,
      loadingStaff: true,
      selectedServiceId: null,
      selectedEmployeeId: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onServiceSelect = this.onServiceSelect.bind(this);
    this.onEmployeeSelect = this.onEmployeeSelect.bind(this);
  }

  componentDidMount() {
    // Only fetch once, on page load
    // If data is stale booking will be rejected by backend and data will be refreshed
    // TODO: handle booking conflicts
    this.fetchServices();
    this.fetchStaff();
  }

  onServiceSelect(serviceId) {
    this.setState({ selectedServiceId: serviceId });
  }

  onEmployeeSelect(employeeId) {
    this.setState({ selectedEmployeeId: employeeId });
  }

  fetchServices() {
    fetch(process.env.REACT_APP_API_URL + "/products")
      .then((response) => response.json())
      .then((data) =>
        // TODO: handle errors
        this.setState({ services: data["products"], loadingServices: false })
      );
  }

  fetchStaff() {
    fetch(process.env.REACT_APP_API_URL + "/staff")
      .then((response) => response.json())
      .then((data) =>
        // TODO: handle errors
        this.setState({ staff: data["staff"], loadingStaff: false })
      );
  }

  handleSubmit(event) {
    if (this.state.showError) {
      alert(
        "Invalid Booking: Please select a service, employee, and an available time."
      );
      event.preventDefault();
    } else {
      alert("Booking Successfull!");
      event.preventDefault();
    }
  }

  showSuccessAlert = () => {
    this.setState({ showSuccess: true });
  };

  hideSuccessAlert = () => {
    this.setState({ showSuccess: false });
  };

  showErrorAlert = () => {
    this.setState({ showError: true });
  };

  hideErrorAlert = () => {
    this.setState({ showError: false });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Jumbotron id="jumbotron-cus-book-page">
          <h2 className="h2-cus-book-page">Booking</h2>
          <Container className="customerBookingPageContainer">
            <CardDeck>
              <ServiceCard
                services={this.state.services}
                loading={this.state.loadingServices}
                onSelect={this.onServiceSelect}
              />
              <StaffCard
                staff={this.state.staff}
                loading={this.state.loadingStaff}
                onSelect={this.onEmployeeSelect}
              />
              <TimeSelectorCard />
            </CardDeck>
          </Container>
          <Container className="makeCusBooking">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              onClick={this.showErrorAlert}
            >
              Make Booking
            </Button>
          </Container>
        </Jumbotron>
      </Form>
    );
  }
}

export default CustomerBookingPage;
