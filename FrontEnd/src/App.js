import React from 'react';
import NavigationBar from "./components/layouts/Navbar.js";
import Footer from './components/layouts/Footer.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';  
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';  
import ContactPage from './components/pages/ContactPage';
import CustomerBookingPage from './components/pages/CustomerBookingPage.js';

import CustomerPastBookingsPage from './components/pages/CustomerPastBookingsPage.js';

import Dashboard from './components/pages/Dashboard.js';
import AdminDashboard from './components/pages/AdminDashboard.js';
import Account from './components/pages/Account.js';
import Profile from './components/pages/Profile.js';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap"> 
        
        <BrowserRouter>
        <NavigationBar loggedIn={true}/>
        <Switch> 
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/customer-booking-page" component={CustomerBookingPage} />
          <Route path="/customer-past-bookings" component={CustomerPastBookingsPage}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/account" component={Account} />
          <Route path="/profile" component={Profile} />
        </Switch>
        </BrowserRouter>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
