import React, { Component } from 'react';
import backendFunctions from '../backend-firebase.js';
import styles from './css/Listing.css'


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
        if (this.props.userUID) {
            this.state.listing.forSale = false;
            this.props.handleBuy(this.state.listing, this.props.listingID);
            this.forceUpdate();
        } else {
            alert('Please sign in')
        }
        
        // todo - unclear if forceUpdate() is a good idea 
    }


    render() {
        return (
            <li>
                <div className="listing">
                    
                    <img className="listingImage" src={this.state.listing.imageURL} />
                    <h4>{this.state.listing.title} - $ <span>{this.state.listing.price}</span></h4>
                    <span>Description: {this.state.listing.blurb}</span>
                    {this.state.listing.forSale === true ?
                        <button className="buyButton" onClick={this.handleSubmit}>Buy now</button> :
                        <button className ="soldButton" disabled={true}>Sold</button>
                    }
                    
                </div>
            </li>    
        )
    };
}

export default Item;