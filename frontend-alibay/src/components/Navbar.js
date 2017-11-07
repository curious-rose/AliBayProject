import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="navBar">
                <img className="logoImg" src= "../images/logo.png"/> onClick="handleImageClick"/>
                <input className="searchItems" placeholder="Search"/>
                <div className="navButtonsSection">
                    <button className="navButton">My Account </button>
                    <button className="navButton">Sign in</button>
                </div>
            </div>
        );
    };
}

export default NavBar;