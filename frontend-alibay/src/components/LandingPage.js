import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';
import styles from './css/LandingPage.css'
import enterMarket from '../images/enterMarket.jpg'

class LandingPage extends Component {

    render() {
        return (
            <div className="landingPage">
                <div className="landingActions">
                <h3>Welcome to Ali Bay</h3>
                    <div>
                    <img className="enterMarket" src={enterMarket} />
                    </div>
                    
                </div>
               
            </div>
        );
    };
}

export default LandingPage;