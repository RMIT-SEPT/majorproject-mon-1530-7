import React from 'react';
import NavigationBar from "./components/layouts/Navbar.js";
import Footer from './components/layouts/Footer.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';  
import HomePage from './components/pages/HomePage';
import Dashboard from './components/pages/Dashboard.js';
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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
        </Switch>
        </BrowserRouter>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
