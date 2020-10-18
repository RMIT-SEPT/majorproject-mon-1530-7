import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Jumbotron, Row } from "react-bootstrap";
import "../../index.css";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import BookingsList from "./BookingsList";

class AdminDashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurrent: true,
    };
  }

  componentDidMount() {}

  setCurrentState = () => {
    this.setState({ showCurrent: true });
  };

  setPastState = () => {
    this.setState({ showCurrent: false });
  };

  render() {
    return (
      <Jumbotron id="dashboard-jumbotron">
        <Container>
          <h2 className="h2-main">Admin Dashboard</h2>
          <Row className="shadow p-3 mb-5 bg-white rounded" id="row-custom">
            <Col className="shadow p-3 mb-5 bg-white rounded" id="col-custom">
              <ButtonGroup toggle>
                <ToggleButton
                  type="radio"
                  variant="outline-primary"
                  checked={this.state.showCurrent}
                  name="radio"
                  size="lg"
                  onChange={this.setCurrentState}
                >
                  Upcoming
                </ToggleButton>
                <ToggleButton
                  type="radio"
                  variant="outline-primary"
                  checked={!this.state.showCurrent}
                  name="radio"
                  size="lg"
                  onChange={this.setPastState}
                >
                  Completed
                </ToggleButton>
              </ButtonGroup>
              {this.state.showCurrent ? (
                <BookingsList upcoming includeCustomerName />
              ) : (
                <BookingsList includeCustomerName />
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default AdminDashboardLayout;
