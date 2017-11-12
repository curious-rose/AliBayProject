import React, { Component } from 'react';
import backendFunctions from '../backend-firebase.js';
import styles from './css/Listing.css'

class Listing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listings: []
        }
    }
    
    componentDidMount() {
    this.getListings(this.props.data)
    }

    getListings = (listingsArray) => {
        listingsArray.map(listingID => backendFunctions.getItemDescription(listingID)
        .then( itemObject => {
            this.setState(st => ({
            listings: st.listings.concat(itemObject)
            })) 
        }))
    }

    displayItems = (listing) => {
        return (
            <li>
                <div>
                    <img className="listingImage" src={listing.imageURL}></img>
                    <h4>{listing.title} -  $ <span>{listing.price}</span></h4>
                    <span>Description: {listing.blurb}</span>  

                </div>
            </li>
        )
    }

    render() {
        console.log('state: ', this.state)
        return (
            <div>
            {this.state.listings.map(this.displayItems)}

            </div>
        )
    }
}

export default Listing;
