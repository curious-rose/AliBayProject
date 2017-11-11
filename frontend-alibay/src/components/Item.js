import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Item extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.item.forSale = false;
        this.props.handleBuy(this.props.item, this.props.item.listingID);
        this.forceUpdate();
        // todo - unclear if forceUpdate() is a good idea 
    }

    render() {
        return (
            <li>
                <div>
                    <img src={this.props.item.imageURL}/>
                    <h4>{this.props.item.title} - <span>{this.props.item.price}</span></h4>
                    <p>{this.props.item.blurb}</p>
                   { this.props.item.forSale === true ?
                    <button onClick={this.handleSubmit}>Buy now</button> :
                    <button disabled={true}>Sold</button>
                   } 
                </div>
            </li>

        )
    };
}

export default Item;