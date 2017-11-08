import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="navBar">
                <Link to="/shopall/">
                    <img className="imgLogo" src={logoImage} />
                </Link>
                <input className="searchItems" placeholder="Search"/>
                <div className="navButtonsSection">
                    <Link to="/accountpage/" className="navButton">My Account </Link>
                     {/* this button will trigger google authentication , 
                    so instead of it being in component did mount it will be triggered here, 
                    but probably in the app.js page*/}
                    <button className="navButton">Sign in</button>
                   
                </div>
            </div>
        );
    };
}

export default NavBar;