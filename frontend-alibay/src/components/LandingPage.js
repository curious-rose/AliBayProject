import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="landingPage">
                <div className="landingActions">
                    <img className="imgLogo" src={logoImage} />
                    <input className="landingSearch" placeholder="Search"/>
                    <div className="createAccountOption">
                        <h4>No account?</h4>
                        <Link to="/createaccount/">Create an account</Link>
                    </div>
                </div>
               
            </div>
        );
    };
}

export default LandingPage;