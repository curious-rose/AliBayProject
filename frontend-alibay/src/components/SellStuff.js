import React, { Component } from 'react';
import {  Link } from 'react-router-dom';

class SellStuff extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sellStuff">
                <h1>Sell items</h1>
                <form >
                    <div>
                        <p> Item Title:</p>
                        <input type="text"/>
                    </div>
                    <div>
                        <p> Price:</p>
                        <input type="text"/>
                    </div>
                    <div>
                        <p> Description:</p>
                        <input type="text"/>
                    </div>
                    
                    {/* Upload image: <button> Search computer </button>
                    <button> Upload now </button> */}
        <Link to="/accountpage"> <button>Submit</button> </Link>
             </form>
            </div>
        );
    };
}


export default SellStuff;