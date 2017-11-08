import React, { Component } from 'react';

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
        <input type="submit" />
             </form>
            </div>
        );
    };
}


export default SellStuff;