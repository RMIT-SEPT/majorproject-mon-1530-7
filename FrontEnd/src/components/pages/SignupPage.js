import React, { Component } from 'react'

class SignupPage extends Component {
    render() {
        return (
            <div className="signupContainer"> 
                
                    <div className="signupFormContent">
                        <div className="signupForm">
                            
                            <div className="signupFormGroup">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="Username"/>
                            </div>

                            <div className="signupFormGroup">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>

                            <div className="signupFormGroup">
                                <label htmlFor="password">Confirm Password</label>
                                <input type="password" name="password" placeholder="Confirm Password"/>
                            </div>

                            <div className="signupFormGroup">
                                <label htmlFor="admin">Admin Account</label>
                                <input type="checkbox" checked="checked" name="Admin"/>

                                <label htmlFor="Worker">Worker Account</label>
                                <input type="checkbox" checked="checked" name="Worker"/>

                                <label htmlFor="Customer">Customer Account</label>
                                <input type="checkbox" checked="checked" name="Customer"/>
                            </div>

                        </div>
                    </div>
                    <div className="signupFormFooter">
                        <button type="button" className="loginFormButton">
                            Create Account.
                        </button>
                    </div>  
                    <p>By creating account you agree to our Terms and Conditions.</p>
            </div>
            
        )
    }
}

export default SignupPage;