import React, { Component } from 'react';
import backendFunctions from '../backend-firebase.js'
import Item from './Item';
import Listing from './Listing'

class ShopAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allListings: [],

        }
    }

    componentDidMount() {
        backendFunctions.allListings().then(itemsForSale => {
            this.setState({ allListings: itemsForSale })
        })

    }

    componentWillReceiveProps(nextProps) {
        backendFunctions.searchForListings(nextProps.searchTerm)
        .then(filteredResults => this.setState({ allListings: filteredResults }) )
    //const listingIDs = 
    //     this.updateListings(listingIDs);
    }

    // updateListings = (listingIDs) => {
    //     const itemDescriptions = listingIDs.map(itemId => {
    //         let itemDesc = backendFunctions.getItemDescription(itemId);
    //         itemDesc.listingID = itemId;
    //         return itemDesc;
    //     });
    //     
    // }


    handleBuy = (item, listingID) => {
        console.log('userIUD, sellerID, listingID', this.props.userUID, item.sellerID, listingID)
        try {
            backendFunctions.buy(this.props.userUID, item.sellerID, listingID)
            .then

        } catch (error) {
            console.log('please sign in ', error)
        }
    }


    displayForSale = (listing) => {
        return (
            <Item item={listing} key={listing.listingID} listingID={listing} handleBuy={this.handleBuy} />
        )
    }

//<Item data={this.state.allListings} />

    render() {

        return (
            <div className="shopAll">
                <h1 className="title">Things to buy </h1>
                <div className="results">
                    <div className="ItemsForSale">
                    <h2>Items for Sale</h2>
                        {this.state.allListings.length 
                        ?
                            ( <ul>  {this.state.allListings.map(this.displayForSale)} </ul>)
                        :
                            (<p>You don't have anything for sale.</p>)
                        }
                    </div>
                </div>
            </div>
        );
    };
}

export default ShopAll;