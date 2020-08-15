import React, { Component } from 'react'

class LoginPage extends Component {
    render() {
        return (
            <div className="loginContainer"> 
                
                    <div className="loginFormContent">
                        <div className="loginForm">
                            <div className="loginFormGroup">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="Username"/>
                            </div>
                            <div className="loginFormGroup">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                        </div>
                    </div>
                    <div className="loginFormFooter">
                        <button type="button" className="loginFormButton">
                            Login
                        </button>
                    </div>  
            </div>
            
        )
    }
}

export default LoginPage;
