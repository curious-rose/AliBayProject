import React, { Component } from 'react';
import backendFunctions from '../backend-firebase.js';
import styles from './css/Item.css'


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: []
        }
    }


    componentDidMount() {
        this.getListing(this.props.item)
    }

    getListing = (listingID) => {
        backendFunctions.getItemDescription(listingID)
            .then(itemObject => {
                this.setState(st => ({
                    listing: (itemObject)
                }))
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.listing.forSale = false;
        this.props.handleBuy(this.state.listing, this.props.listingID);
        this.forceUpdate();
        // todo - unclear if forceUpdate() is a good idea 
    }


    render() {
        return (
            <li>
                <div className="items">
                    <img className="productImage" src={this.state.listing.imageURL} />
                    <h4>{this.state.listing.title} - $ <span>{this.state.listing.price}</span></h4>
                    <p>Description: {this.state.listing.blurb}</p>
                    {this.state.listing.forSale === true ?
                        <button className="buyButton" onClick={this.handleSubmit}>Buy now</button> :
                        <button disabled={true}>Sold</button>
                    }
                </div>
            </li>

        )
    };
}

export default Item;