import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="NavBar">
                <input />
             <button> My Account </button>
             <button> Shop </button>
             <button> Sign in/up </button>
            </div>
        );
    };
}

export default NavBar;