import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';
import styles from './css/LandingPage.css'
import enterMarket from '../images/enterMarketCropped.jpg'

class LandingPage extends Component {

    render() {
        return (
            <div className="landingPage">
                <div className="landingActions">
               <Link to="/shopall/"><h1>Welcome to Ali Bay</h1></Link>
                    <div className="imgDiv">
                    <img className="enterMarket" src={enterMarket} />
                    </div>
                    
                </div>
               
            </div>
        );
    };
}

export default LandingPage;