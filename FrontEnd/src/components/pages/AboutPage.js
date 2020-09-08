import React, { Component } from 'react'
import Body from '../Body';
import Main from '../Main';

class HomePage extends Component {
    render() {
        return (
            <div>
            <Main>
                About Us.
            </Main>    
            <Body>
                Here at Fresh-Cutz we take pride in having good connections with our cutz-omers 
                and creating an easy environment online to assists our cutz-omers to book their trips into our selected salons. 

                To make a booking visit the home page and ensure your logged in!!!
            </Body>

                <div class="form-group">
                    Not Registered Yet? <a href="/signup">Register Here</a> 
                </div>
                <div class="form-group">
                    <a href="/login">Or log in here!!</a> 
                </div>
            </div>
        );
    }
}

export default HomePage;
