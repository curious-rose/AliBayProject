import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import backendFunctions from '../backend-mockup.js'

class ShopAll extends Component {
    constructor(props) {
        super(props);
        this.state = {listingNumbers: []}
    }

    componentDidMount() {
        let numbers = backendFunctions.allListings();
        this.setState({listingNumbers : numbers})
        // console.log('all listings ', backendFunctions.allListings())
    }

    handleBuy = (event) => {
       // backendFunctions.buy()
       
       console.log('state listing Numbers ', this.state.listingNumbers  )
    }


    displayForSale = (listingID) => {
        let item = backendFunctions.getItemDescription(listingID);
            if (item.forSale) {
                return (
                    <li>
                        <div> 
                            <h4>{item.title} - <span>{item.price}</span></h4>
                            <p>{item.blurb}</p>
                            <button onClick={this.handleBuy}>Buy now</button>
                        </div>    
                    </li>
                )
            }
        }

    render() {
        return (
            <div className="shopAll">
              <h1 className="title">Things to buy </h1>
               <div className="results">
                <ul>
                {this.state.listingNumbers.map(this.displayForSale)} 
                </ul>
               </div>
            </div>
        );
    };
}

export default ShopAll;