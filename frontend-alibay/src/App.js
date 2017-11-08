import React, { Component } from 'react';
import './App.css';
import AccountPage from './components/AccountPage'
import CreateAccount from './components/CreateAccount'
import LandingPage from './components/LandingPage'
import SellStuff from './components/SellStuff'
import SearchResults from './components/SearchResults'
import ShopAll from './components/ShopAll'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar.js'
// import ItemPage from './components/ItemPage'
import { BrowserRouter, Link, Route } from 'react-router-dom'

const firebase = require('firebase');



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB3i40mpq5TEh0Hsn5WeahXGCumZZ6yfRE",
    authDomain: "fir-pro-3eb25.firebaseapp.com",
    databaseURL: "https://fir-pro-3eb25.firebaseio.com",
    projectId: "fir-pro-3eb25",
    storageBucket: "fir-pro-3eb25.appspot.com",
    messagingSenderId: "969709962349"
  };

  firebase.initializeApp(config);
  const database = firebase.database();
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const provider = new firebase.auth.GoogleAuthProvider();


class App extends Component {
  constructor() {
    super()
    this.state = {currentUser: null}
  }

  // uid should be user email

    handleSignIn = (event) => {
      console.log('test');
      if (this.state.currentUser === null) {
          firebase.auth()
          .signInWithPopup(provider)
            .then(userData => {
                this.setState({
                  currentUser: userData
                })
            })
        } else { console.log('not working')}
    }  

  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <NavBar action={this.handleSignIn} />
            <div>
              <Route path="/landingpage" component={LandingPage} />
              <Route path="/createaccount" component={CreateAccount} />
              <Route path="/signin" component={SignIn} />
              <Route path="/sellstuff" component={SellStuff} />
              <Route path="/searchresults" component={SearchResults} />
              <Route path="/accountpage" component={AccountPage} />
              <Route path="/shopall" component={ShopAll} />
            </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
