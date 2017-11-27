import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SignIn extends Component {
    render() {
        return (
            <div className="signIn">
                <div className="signInActions">
                    <img className="imgLogo" src="../images/logo.png"/>
                    <h3>Sign in now!</h3>
                    <form className="signInForm">
                        <input className="emailInput" placeholder="Email Address"/>
                        <input className="passInput" placeholder="Password"/>
                        <button className="submitSignIn">Sign In</button>
                    </form>
                        <div className="createAccountOption">
                            <h4>No account?</h4>
                          <Link to="/createaccount" className="createButton">  
                          Create Account
                          </Link>
                        </div>
                </div>
            </div>
        );
    };
}

export default SignIn;