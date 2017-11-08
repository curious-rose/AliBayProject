import React, { Component } from 'react';

class ShopAll extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopAll">
              <h1 className="title">Things to buy </h1>
               <div className="results">
                <ul>
                 <li>1</li>   
                 <li>2</li>   
                 <li>3</li>   
                </ul>
               </div>
            </div>
        );
    };
}

export default ShopAll;