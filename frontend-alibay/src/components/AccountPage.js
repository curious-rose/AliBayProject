import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backendFunctions from '../backend-mockup.js'


class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsBought: [],
            itemsSold: [],
            itemsForSale: [],

        }
    }

    componentDidMount() {
        // todo: put in actual userID parameter
        let boughtIds = backendFunctions.allItemsBought(1000);
        let soldIds = backendFunctions.allItemsSold(1000);
        let forSaleIds = backendFunctions.allListings(1000);
        // let itemsBought = []
        // if (boughtIds) {
        //     itemsBought = boughtIds.map(backendFunctions.getItemDescription)
        // }
        // console.log('items bought ', itemsBought)
        this.setState({

            itemsBought: boughtIds,
            itemsSold: soldIds,
            itemsForSale: forSaleIds,
        })

    }


    displayItems = (listingID) => {
        let item = backendFunctions.getItemDescription(listingID);
        return (
            <li>
                <div>
                    <h4>{item.title} - <span>{item.price}</span></h4>
                    <p>{item.blurb}</p>

                </div>
            </li>
        )
    }

    render() {
        return (
            <div className="AccountPage">
                <h1>Your Account. Welcome (Enter username)</h1>
                <Link to="/shopall" className="shopButton"><button>Shop now!</button></Link>
                <Link to="/sellstuff" className="sellSomething"><button>Sell Something!</button></Link>
                <div className="accountAction">
                    <div className="ItemsPurchased">
                        <h2>Items Purchased</h2>
                        {this.state.itemsBought ?
                            (<ul>
                                {this.state.itemsBought.map(this.displayItems)}
                            </ul>) :
                            (<p>You haven't bought anything yet.</p>)
                        }
                    </div>
                    <div className="ItemsSold">
                        <h2>Items Sold</h2>
                        {this.state.itemsSold ?
                            (<ul>
                                {this.state.itemsSold.map(this.displayItems)}
                            </ul>) :
                            (<p>You haven't sold anything yet.</p>)
                        }
                    </div>
                    <div className="ItemsForSale">
                        <h2>Items for Sale</h2>
                        {this.state.itemsSold ?
                            (<ul>
                                {this.state.itemsForSale.map(this.displayItems)}
                            </ul>) :
                            (<p>You don't have anything for sale.</p>)
                        }
                    </div>
                </div>
            </div>
        );
    };
}

export default AccountPage;