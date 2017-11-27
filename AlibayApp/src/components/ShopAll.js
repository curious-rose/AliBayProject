import React, { Component } from 'react';
import backendFunctions from '../backend-firebase.js'
import Item from './Item';
import styles from './css/Listing.css'


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
        
        try {
            backendFunctions.buy(this.props.userUID, item.sellerID, listingID)
            

        } catch (error) {
            console.log('please sign in ', error)
        }
    }


    displayForSale = (listing) => {
        return (
            <Item item={listing} key={listing.listingID} listingID={listing} handleBuy={this.handleBuy} userUID={this.props.userUID}/>
        )
    }

//<Item data={this.state.allListings} />

    render() {

        return (
            <div className="shopAll">
                <h1 className="title">Things to buy </h1>
                        {this.state.allListings.length 
                        ?
                            ( <div className="listings">  {this.state.allListings.map(this.displayForSale)} </div>)
                        :
                            (<p>You don't have anything for sale.</p>)
                        }
                    
            </div>
        );
    };
}

export default ShopAll;