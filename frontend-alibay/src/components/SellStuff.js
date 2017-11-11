import React, { Component } from 'react';
import backendFunctions from '../backend-firebase.js'

class SellStuff extends Component {
    // createListing( price, title, blurb, sellerID,)

    handleSubmit = (event) => {
        event.preventDefault();
        backendFunctions.createListing(
       this.props.userUID, this.priceInput.value,this.titleInput.value, this.blurbInput.value,);
        // console.log('local storage ', localStorage.userID, '',localStorage.getItem('userID') );
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