import React, { Component } from 'react';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="createAccount">
                <div className="signInActions">
                    <img className="imgLogo" src="../images/logo.png"/>
                    <h3>Create a new account</h3>
                    <form className="signInForm">
                        <input className="emailInput" placeholder="Email Address"/>
                        <input className="emailInputConfirm" placeholder="Confirm Email Address"/>
                        <input className="countryInput" placeholder="Country"/>
                        <input className="postalInput" placeholder="Postal Code"/>
                        <input className="passInput" placeholder="Password"/>
                        <input className="passInputConfirm" placeholder="Password"/>
                        <button className="submitSignIn">Submit</button>
                    </form>
                        <div className="createAccountOption">
                            <h4>No account?</h4>
                            <button className="createButton">Create Account</button>
                        </div>
                </div>
            </div>
        );
    };
}

export default SignIn;