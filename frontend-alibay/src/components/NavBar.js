import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/smalllogo.png';
import styles from './css/NavBar.css'

class NavBar extends Component {

    render() {
        return (
            <div className="navBar">
                <Link  to="/shopall/">
                    <img className="imgLogo" src={logoImage} />
                </Link>
                <input className="navSearchInput" onChange={(event)=>(this.props.updateSearchTerm(event.target.value))} placeholder="Search"/>
                <div className="navButtonsSection">
                    {
                        this.props.userEmail && 
                        <Link to="/accountpage/" className="navButton">My Account </Link>
                    }
                    
                    { 
                        !this.props.userEmail ?
                        <button className="navButton" onClick={this.props.action}>Sign in</button> :
                        <button className="navButton" onClick={this.props.reaction}>Sign out</button>
                    }
                    
                   
                </div>
            </div>
        );
    };
}

export default NavBar;
