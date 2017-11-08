import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import backendFunctions from '../backend-mockup.js'

class ShopAll extends Component {
    constructor(props) {
        super(props);
        this.state = {listingNumbers: []}
    }
    

    render() {
        return (
            <div className="shopAll">
              <h1 className="title">Things to buy </h1>
               <div className="results">
                <ul>
                 <li>1</li>   
                 <li>2</li>   
                 <li>3</li>   
                </ul>
               </div>
            </div>
        );
    };
}

export default ShopAll;