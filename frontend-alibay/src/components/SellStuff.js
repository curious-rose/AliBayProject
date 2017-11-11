import React, { Component } from 'react';
import backendFunctions from '../backend-firebase.js'


class SellStuff extends Component {
    constructor(props){
        super(props)
        this.state = {imageFile:{},
                      listingUploaded: false}
    }

    // createListing( price, title, blurb, sellerID,)

    handleSubmit = (event) => {
        event.preventDefault();
        backendFunctions.createListing(
            this.props.userUID, this.priceInput.value, this.titleInput.value, this.blurbInput.value, this.state.imageFile)
            // .then(chain1 => console.log('chain 1', chain1))
        // console.log('local storage ', localStorage.userID, '',localStorage.getItem('userID') );
        // 
        .then(() => this.setState({listingUploaded: true}) )
        // .then(() => this.props.history.push('/accountpage'))
    }

    doUpload = file => {
        console.log('uploading to', file.name);
    
    }

    uploadPhoto = event => {
        const file = event.target.files[0];
        console.log('uploading: ', file);
        this.setState({imageFile: file})

    }

    
    render() {
        return (
            <div className="sellStuff">
                <h1>Sell items</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <p> Item Title:</p>
                        <input type="text" ref={r => this.titleInput = r} />
                    </div>
                    <div>
                        <p> Price:</p>
                        <input type="text" ref={r => this.priceInput = r} />
                    </div>
                    <div>
                        <p> Description:</p>
                        <input type="text" ref={r => this.blurbInput = r} />
                    </div>
                    <div>
                        <p> Upload image: </p>
                        <input type="file" onChange={this.uploadPhoto} />
                    </div>
                    <p>
                        <button>Submit</button>
                    </p>

                    {this.state.listingUploaded && (<p>Your listing has been uploaded!</p>)}

                </form>
            </div>
        );
    };
}


export default SellStuff;