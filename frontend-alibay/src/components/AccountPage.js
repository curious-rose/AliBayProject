import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backendFunctions from '../backend-firebase.js'


class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsBought: [],
            itemsSold: [],
            itemsForSale: [],
            item: {},

        }
    }

    componentDidMount() {

        backendFunctions.allItemsBought(this.props.userUID).then(itemsBought => this.setState({ itemsBought }));
        backendFunctions.allItemsSold(this.props.userUID).then(itemsSold => this.setState({ itemsSold }));
        backendFunctions.allListings(this.props.userUID).then(itemsForSale => {
            itemsForSale.map(listingId => {
                backendFunctions.getItemDescription(listingId).then(item => this.setState({ item }))
            })
            this.setState({ itemsForSale })
        })



        // todo: put in actual userID parameter
        //    backendFunctions.allItemsBought(this.props.userUID).then(itemsBought => this.setState({ itemsBought }));
        //   backendFunctions.allItemsSold(this.props.userUID).then(itemsSold => this.setState({ itemsSold }));
        //  backendFunctions.allListings(this.props.userUID).then(itemsForSale => this.setState({ itemsForSale }))
        // let itemsBought = []
        // if (boughtIds) {
        //     itemsBought = boughtIds.map(backendFunctions.getItemDescription)
        // }
        // console.log('items bought ', itemsBought)
        // 

    }



    displayItems = (listingID) => {

        // 
        return (
            <li>
                <div>
                    <h4>{this.state.item.title} - <span>{this.state.item.price}</span></h4>
                    <p>{this.state.item.blurb}</p>

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
                {this.state.items
                    ?
                    <div>
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
                    :
                    (<h3>one moment please...</h3>)
                }

            </div>
        );
    };
}

export default AccountPage;