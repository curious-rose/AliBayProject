import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { allItemsSold, allListings, allItemsBought } from '../backend-mockup.js';

class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    displayItem = (x) => (<li> {x} </li>)

    render() {
        return (
            <div className="AccountPage">
                <h1>Your Account. Welcome (Enter username)</h1>
                <Link to="/shopall" className="shopButton"><button>Shop now!</button></Link>
                <Link to="/sellstuff" className="sellSomething"><button>Sell Something!</button></Link>
                <div className="accountAction">
                    <div className="ItemsPurchased">
                        <h2>Items Purchased</h2>
                        <ul>
                            {this.state.items.map(this.displayItem)}
                        </ul>
                    </div>
                    <div className="ItemsSold">
                        <h2>Items Sold</h2>
                        <ul>
                            <li>test1</li>
                        </ul>
                    </div>
                    <div className="ItemsForSale">
                        <h2>Items for Sale</h2>
                        <ul>
                            <li>test1</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}

export default AccountPage;