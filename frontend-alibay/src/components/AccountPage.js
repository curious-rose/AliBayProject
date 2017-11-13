import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backendFunctions from '../backend-firebase.js'
import Listing from './Listing'
import styles from './css/AccountPage.css'

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

        backendFunctions.allItemsBought(this.props.userUID).then(itemsBought => this.setState({ itemsBought }));
        backendFunctions.allItemsSold(this.props.userUID).then(itemsSold => this.setState({ itemsSold }));
        backendFunctions.allListings(this.props.userUID).then(itemsForSale => {
            this.setState({ itemsForSale })
        })
    }


    render() {
        return (
            <div className="accountPage">
                <h1>Your Account</h1>
                <Link to="/shopall" className="shopButton"><button>Shop</button></Link>
                <Link to="/sellstuff" className="sellSomething"><button>Sell Something</button></Link>
                    <div>
                        <div className="accountAction">
                            <div className="ItemsPurchased">
                                <h2>Items Purchased</h2>
                                {this.state.itemsBought.length ?
                                 <Listing data={this.state.itemsBought}/> :
                                    (<p>You haven't bought anything yet.</p>)
                                }
                            </div>
                            <div className="ItemsSold">
                                <h2>Items Sold</h2>
                                {this.state.itemsSold.length ?
                                    <Listing data={this.state.itemsSold}/>
                                    :
                                    (<p>You haven't sold anything yet.</p>)
                                }
                            </div>
                            <div className="ItemsForSale">
                                <h2>Items for Sale</h2>
                                {this.state.itemsForSale.length ?
                                    <Listing data={this.state.itemsForSale}/>
                                     :
                                    (<p>You don't have anything for sale.</p>)
                                }
                            </div>
                        </div>
                    </div>
            </div>
        );
    };
}

export default AccountPage;