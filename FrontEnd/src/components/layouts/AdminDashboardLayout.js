import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Jumbotron, Row } from "react-bootstrap";
import "../../index.css";
import AdminDashboardUpcoming from "./AdminDashboardUpcoming";
import UserProfile from "../../UserProfile.js";

class AdminDashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: UserProfile.getUID(),
      upcomingBookings: [],
      loadingUpcomingBookings: true,
    };
  }

  componentDidMount() {
    this.fetchUpcomingBookings();
  }

  fetchUpcomingBookings() {
    fetch(
      process.env.REACT_APP_API_URL + "/bookings?user=" + this.state.user_id,
      {
        headers: {
          Authorization: UserProfile.getToken(),
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          upcomingBookings: data["bookings?user=" + this.state.user_id],
          loadingUpcomingBookings: false,
        })
      );
  }

  render() {
    return (
      <Jumbotron id="dashboard-jumbotron">
        <Container>
          <h2 className="h2-main">Administrator Dashboard</h2>
          <Row className="shadow p-3 mb-5 bg-white rounded">
            <h5 className="h5-main">Upcoming Bookings</h5>

            <AdminDashboardUpcoming
              upcomingBookings={this.state.upcomingBookings}
              loading={this.state.loadingUpcomingBookings}
            />
          </Row>

          <h3>Schedule</h3>

          <Row className="shadow p-3 mb-5 bg-white rounded">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" class="text-center">
                    Sunday
                  </th>
                  <th scope="col" class="text-center">
                    Monday
                  </th>
                  <th scope="col" class="text-center">
                    Tuesday
                  </th>
                  <th scope="col" class="text-center">
                    Wednesday
                  </th>
                  <th scope="col" class="text-center">
                    Thursday
                  </th>
                  <th scope="col" class="text-center">
                    Friday
                  </th>
                  <th scope="col" class="text-center">
                    Saturday
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td>
                    <p class="text-center">[9:30]</p>
                    <p class="text-center">Matea Hoppus</p>
                  </td>
                  <td> </td>
                  <td>
                    <p class="text-center">[9:30]</p>
                    <p class="text-center">Matea Hoppus</p>
                  </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td>
                    <p class="text-center">[10:30]</p>
                    <p class="text-center">Corey Odajian</p>
                  </td>
                  <td> </td>
                  <td>
                    <p class="text-center">[10:30]</p>
                    <p class="text-center">Kurt Smith</p>
                  </td>
                  <td> </td>
                  <td>
                    <p class="text-center">[10:30]</p>
                    <p class="text-center">Hallie Stayley</p>
                  </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td>
                    <p class="text-center">[11:30]</p>
                    <p class="text-center">Corey Odajian</p>
                  </td>
                  <td>
                    <p class="text-center">[11:30]</p>
                    <p class="text-center">Hallie Stayley</p>
                  </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td>
                    <p class="text-center">[12:30]</p>
                    <p class="text-center">Matea Hoppus</p>
                  </td>
                  <td> </td>
                  <td>
                    <p class="text-center">[12:30]</p>
                    <p class="text-center">Hallie Stayley</p>
                  </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default AdminDashboardLayout;
