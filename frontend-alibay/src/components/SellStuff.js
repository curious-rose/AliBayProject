import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import backendFunctions from '../backend-mockup.js'

class SellStuff extends Component {
    constructor(props) {
        super(props);
    }

    // createListing( price, title, blurb, sellerID,)

    handleSubmit = (event) => {
        event.preventDefault();
        backendFunctions.createListing(this.priceInput.value,this.titleInput.value, this.blurbInput.value, 'grace.scharf@gmail.com');
        console.log('all listings ', backendFunctions.allListings());
        this.props.history.push('/accountpage')

    }

    render() {
        return (
            <div className="sellStuff">
                <h1>Sell items</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p> Item Title:</p>
                        <input type="text" ref ={r => this.titleInput = r}/>
                    </div>
                    <div>
                        <p> Price:</p>
                        <input type="text" ref ={r => this.priceInput = r}/>
                    </div>
                    <div>
                        <p> Description:</p>
                        <input type="text" ref ={r => this.blurbInput = r}/>
                    </div>
                    
                    {/* Upload image: <button> Search computer </button>
                    <button> Upload now </button> */}
                    <button>Submit</button> 
             </form>
            </div>
        );
    };
}


export default SellStuff;