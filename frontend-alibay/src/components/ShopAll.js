import React, { Component } from 'react';
import backendFunctions from '../backend-firebase.js'
import Item from './Item';

class ShopAll extends Component {
    constructor(props) {
        super(props);
        this.state = { allListings: [],
                        item: {}
        }
    }

    componentDidMount() {
        // const listingIDs = backendFunctions.allListings();
        backendFunctions.allListings().then(itemsForSale => {
            itemsForSale.map(listingId => {
                backendFunctions.getItemDescription(listingId).then(item => this.setState({ item }))
                .then(() => console.log('shop all state', this.state.item))
            })
            this.setState({ allListings: itemsForSale })
        // this.updateListings(listingIDs);
        })

    }

    // componentWillReceiveProps(nextProps) {
    //     const listingIDs = backendFunctions.searchForListings(nextProps.searchTerm);
    //     this.updateListings(listingIDs);
    // }

    // updateListings = (listingIDs) => {
    //     const itemDescriptions = listingIDs.map(itemId => {
    //         let itemDesc = backendFunctions.getItemDescription(itemId);
    //         itemDesc.listingID = itemId;
    //         return itemDesc;
    //     });
    //     this.setState({ allListings: itemDescriptions })
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.item.forSale = false;
        this.handleBuy(this.state.item, this.state.item.listingID);
        this.forceUpdate();
        // todo - unclear if forceUpdate() is a good idea 
    }

    handleBuy = (item, listingID) => {
        try {
            backendFunctions.buy(this.props.userIUD, item.sellerID, listingID)

        } catch (error) {
            console.log('please sign in ', error)
        }
    }


    displayForSale = (listing) => {
        // let item = backendFunctions.getItemDescription(listingID);

        return (
            <li>
                <div>
                    <img src={this.state.item.imageURL}></img>
                    <h4>{this.state.item.title} - <span>{this.state.item.price}</span></h4>
                    <span>{this.state.item.blurb}</span>
                    { this.state.item.forSale === true ?
                    <button onClick={this.handleSubmit}>Buy now</button> :
                    <button disabled={true}>Sold</button>
                   } 

                </div>
            </li>
        )
        // return (
        //     <Item item={listing} key={listing.listingID} handleBuy={this.handleBuy} />
        // )

    }



    render() {

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