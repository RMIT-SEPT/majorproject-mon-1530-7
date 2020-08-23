import React from 'react';
import NavigationBar from "./components/layouts/Navbar.js";
import Footer from './components/layouts/Footer.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';  
import HomePage from './components/pages/HomePage';
import CustomerPastBookingsPage from './components/pages/CustomerPastBookingsPage.js';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap"> 
        
        <BrowserRouter>
        <NavigationBar />
        <Switch> 
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />





          <Route path="/customer-past-bookings" component={CustomerPastBookingsPage}/>
        </Switch>
        </BrowserRouter>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
