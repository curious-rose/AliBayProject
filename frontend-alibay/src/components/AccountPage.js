import React, { Component } from 'react';

class AccountPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="AccountPage">
                <h1>Your Account. Welcome username </h1>
                <button className="shopButton" onClick="handleButtonClick">Shop now! </button>
                <button className="sellSomething" onClick="handleButtonClick">Sell something!</button>
                <div className="accountAction">
                    <div className="ItemsPurchased">
                        <h2>Items Purchased</h2>
                        <ul>
                            <li>test1</li>

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