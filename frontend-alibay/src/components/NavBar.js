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
                <Link  to="/shopall/">
                    <img className="imgLogo" src={logoImage} />
                </Link>
                <input className="navSearchInput" onChange={(event)=>(this.props.updateSearchTerm(event.target.value))} placeholder="Search"/>
                <div className="navButtonsSection">
                    {
                        (localStorage.getItem('userID')) && 
                        <Link to="/accountpage/" className="navButton">My Account </Link>
                    }
                    
                    { 
                        (!localStorage.getItem('userID')) ?
                        <button className="navButton" onClick={this.props.action}>Sign in</button> :
                        <button className="navButton" onClick={this.props.reaction}>Sign out</button>
                    }
                    
                   
                </div>
            </div>
        );
    };
}

export default NavBar;
