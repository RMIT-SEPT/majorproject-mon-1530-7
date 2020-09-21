import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Jumbotron, Row } from 'react-bootstrap';
import "../../index.css";

function AdminDashboardLayout() {
  return (
    <Jumbotron id="dashboard-jumbotron">
      <Container>
        <h2 className="h2-main">Administrator Dashboard</h2>
          <Row className="shadow p-3 mb-5 bg-white rounded">
            <h5 className="h5-main">Upcoming Bookings</h5>
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Employee</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Service 1</td>
                  <td>Corey Odajian</td>
                  <td>21/09/2020</td>
                  <td>10:30am</td>
                  <button className="cancel-btn">Edit</button>
                  <button className="cancel-btn">Schedule</button>
                </tr>
                <tr>
                  <td>Service 2</td>
                  <td>Matea Hoppus</td>
                  <td>22/09/2020</td>
                  <td>9:30am</td>
                  <button className="cancel-btn">Edit</button>
                  <button className="cancel-btn">Schedule</button>
                </tr>
                <tr>
                  <td>Service 3</td>
                  <td>Corey Odajian</td>
                  <td>22/09/2020</td>
                  <td>10:30am</td>
                  <button className="cancel-btn">Edit</button>
                  <button className="cancel-btn">Schedule</button>
                </tr>
                <tr>
                  <td>Service 4</td>
                  <td>Matea Hoppus</td>
                  <td>22/09/2020</td>
                  <td>12:30pm</td>
                  <button className="cancel-btn">Edit</button>
                  <button className="cancel-btn">Schedule</button>
                </tr>
                <tr>
                  <td>Service 5</td>
                  <td>Kurt Smith</td>
                  <td>23/09/2020</td>
                  <td>10:30am</td>
                  <button className="cancel-btn">Edit</button>
                  <button className="cancel-btn">Schedule</button>
                </tr>
              </tbody>
            </table>
          </Row>

          <h3>Schedule</h3>

          <Row className="shadow p-3 mb-5 bg-white rounded">
            <table class="table table-bordered">
              <thead >
                <tr>
                  <th scope="col" class="text-center">Sunday</th>
                  <th scope="col" class="text-center">Monday</th>
                  <th scope="col" class="text-center">Tuesday</th>
                  <th scope="col" class="text-center">Wednesday</th>
                  <th scope="col" class="text-center">Thursday</th>
                  <th scope="col" class="text-center">Friday</th>
                  <th scope="col" class="text-center">Saturday</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>      </td>
                  <td>      </td>
                  <td><p class="text-center">[9:30]</p><p class="text-center" >Matea Hoppus</p></td>
                  <td>      </td>
                  <td><p class="text-center" >[9:30]</p><p class="text-center">Matea Hoppus</p></td>
                  <td>      </td>
                  <td>      </td>
                </tr>
                <tr>
                  <td>      </td>
                  <td><p class="text-center">[10:30]</p><p class="text-center">Corey Odajian</p></td>
                  <td>      </td>
                  <td><p class="text-center">[10:30]</p><p class="text-center">Kurt Smith</p></td>
                  <td>      </td>
                  <td><p class="text-center">[10:30]</p><p class="text-center">Hallie Stayley</p></td>
                  <td>      </td>
                </tr>
                <tr>
                  <td>      </td>
                  <td>      </td>
                  <td><p class="text-center">[11:30]</p><p class="text-center">Corey Odajian</p></td>
                  <td><p class="text-center">[11:30]</p><p class="text-center">Hallie Stayley</p></td>
                  <td>      </td>
                  <td>      </td>
                  <td>      </td>
                </tr>
                <tr>
                  <td>      </td>
                  <td>      </td>
                  <td><p class="text-center">[12:30]</p><p class="text-center">Matea Hoppus</p></td>
                  <td>      </td>
                  <td><p class="text-center">[12:30]</p><p class="text-center">Hallie Stayley</p></td>
                  <td>      </td>
                  <td>      </td>
                </tr>
              </tbody>
            </table>
          </Row>
      </Container>
    </Jumbotron>
  )
}

export default AdminDashboardLayout;