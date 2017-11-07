import React, { Component } from 'react';

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="landingPage">
                <div className="landingActions">
                    <img className="imgLogo" src= "../images/logo.png" />
                    <input className="landingSearch" placeholder="Search"/>
                    <div className="createAccountOption">
                        <h4>No account?</h4>
                        <button className="createButton">Create Account</button>
                    </div>
                </div>
               
            </div>
        );
    };
}

export default LandingPage;