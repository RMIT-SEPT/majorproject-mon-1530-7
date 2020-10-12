import React from "react";
import { Redirect } from 'react-router';
import NavigationBar from "./components/layouts/Navbar.js";
import Footer from "./components/layouts/Footer.js";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import CustomerBookingPage from "./components/pages/CustomerBookingPage.js";
import NewEmployeePage from "./components/pages/NewEmployeePage.js";

import AdminPastBooking from "./components/pages/AdminPastBooking.js";
import CustomerPastBookingsPage from "./components/pages/CustomerPastBookingsPage.js";

import Dashboard from "./components/pages/Dashboard.js";
import AdminDashboard from "./components/pages/AdminDashboard.js";
import Account from "./components/pages/Account.js";
import Profile from "./components/pages/Profile.js";

import ManageEmp from "./components/pages/ManageEmp.js";
import EmpDetails from "./components/pages/EmpDetails.js";

import UserProfile from "./UserProfile.js"
import AdminPastBookingsPage from "./components/pages/AdminPastBookingsPage.js";

function App() {
  console.log(UserProfile.getLoggedIn())
  if(UserProfile.getLoggedIn()) {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <NavigationBar loggedIn={UserProfile.getToken()} />
            <Switch>
                <Route exact path="/" component={HomePage} />,
                <Redirect from="/login" to="dashboard" />,
                <Route path="/about" component={AboutPage} />,
                <Route path="/contact" component={ContactPage} />,
                <Route path="/booking" component={CustomerBookingPage} />,
                <Route
                  path="/customer-past-bookings"
                  component={CustomerPastBookingsPage}
                />,
                <Route path="/dashboard" component={Dashboard} >
                  {UserProfile.getAdmin() ? <Redirect to="/admin-dashboard" /> : <Dashboard />}
                </Route>,
                <Route path="/admin-dashboard" component={AdminDashboard} >
                  {UserProfile.getAdmin() ?   <AdminDashboard /> : <Redirect to="/dashboard" /> }
                </Route>,
                <Route path="/account" component={Account} >
                  {UserProfile.getLoggedIn() ? <Account /> : <Redirect to="/login"/>}
                </Route>,
                <Route path="/new-employee" component={NewEmployeePage} />,
                <Route path="/profile" component={Profile} />,
                <Route path="/manage-emp" component={ManageEmp} />,
                <Route path="/emp-details" component={EmpDetails} /> 
          
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
  else {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <NavigationBar loggedIn={UserProfile.getToken()} />
            <Switch>
              
                <Route exact path="/" component={HomePage} />,
                <Route path="/login" component={LoginPage} />,
                <Route path="/about" component={AboutPage} />,
                <Route path="/contact" component={ContactPage} />,
                <Route path="/booking" component={CustomerBookingPage} />,
                <Route
                  path="/customer-past-bookings"
                  component={CustomerPastBookingsPage}
                />,
                <Redirect from="/dashboard" to="/login" />,
                <Route path="/admin-dashboard" component={AdminDashboard} >
                  {UserProfile.getAdmin() ?   <AdminDashboard /> : <Redirect to="/dashboard" /> }
                </Route>,
                <Redirect from="/account" to="/login" />,
                <Route path="/new-employee" component={NewEmployeePage} />,
                <Route path="/profile" component={Profile} />,
                <Route path="/manage-emp" component={ManageEmp} />,
                <Route path="/emp-details" component={EmpDetails} />  
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}
 

export default App;
