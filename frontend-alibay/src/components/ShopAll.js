import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import backendFunctions from '../backend-mockup.js'
import Item from './Item';
class ShopAll extends Component {
    constructor(props) {
        super(props);
        this.state = { allListings: [] }
    }

    componentDidMount() {
        let numbers = backendFunctions.allListings();
        let itemDescription = numbers.map(itemId => {
            let itemDesc = backendFunctions.getItemDescription(itemId);
            itemDesc.listingID = itemId;
            return itemDesc;
        });
        this.setState({ allListings: itemDescription })

        // console.log('all listings ', itemDescription)
    }

<<<<<<< HEAD
    handleBuy = (event) => {
       // backendFunctions.buy()
       
       console.log('state listing Numbers ', this.state.listingNumbers  )
=======
    handleBuy = (item, listingID) => {
        try {
            backendFunctions.buy(localStorage.getItem('userID'), item.sellerID, listingID)
            
        } catch (error) {
            console.log('please sign in ', error)
        }
        
        console.log(localStorage.getItem('userID'), item.sellerID, listingID)

>>>>>>> 1fe794abcc43dec5500bcb50f18cfb473d54f58e
    }


    displayForSale = (listing) => {
        // let item = backendFunctions.getItemDescription(listingID);
        if (listing.forSale) {
            return (
                <Item item={listing} key={listing.listingID} handleBuy={this.handleBuy} />
            )
        }
    }

    

    render() {

        // console.log('this.state.allListings', this.state.allListings.length)
        
        return (
            <div className="shopAll">
                <h1 className="title">Things to buy </h1>
                <div className="results">
                    <ul>
                        {this.state.allListings.map(this.displayForSale)}
                    </ul>
                    {this.state.allListings.length === 0 && <div> Nothing to buy </div>}

                </div>
            </div>
        );
    };
}

export default ShopAll;