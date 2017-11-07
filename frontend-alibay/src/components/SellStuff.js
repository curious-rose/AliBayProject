import React, { Component } from 'react';

class SellStuff extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SellStuff">
                <h1>Sell items</h1>
                <form >
                    <label>
                        Item Title:
          <input type="text" />
                    </label>
                    <label>
                        Price:
          <input type="text" />
                    </label>
                    <label>
                        Description:
          <input type="text" />
                    </label>
                    {/* Upload image: <button> Search computer </button>
                    <button> Upload now </button> */}
        <input type="submit" />
             </form>
            </div>
        );
    };
}

<Link to="/createaccount" className="createButton">  
Create Account
</Link>

export default SellStuff;