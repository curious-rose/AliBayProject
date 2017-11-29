import React, { Component } from 'react';
import './App.css';
import AccountPage from './components/AccountPage'
import LandingPage from './components/LandingPage'
import SellStuff from './components/SellStuff'
// import SearchResults from './components/SearchResults'
import ShopAll from './components/ShopAll'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import backendFunctions from './backend-firebase.js'
const firebase = require("firebase")



var config = {
  apiKey: "AIzaSyBLPyanpHUetFggO_bG7jgdDUKPOlrhigA",
  authDomain: "curious-rose-alibay.firebaseapp.com",
  databaseURL: "https://curious-rose-alibay.firebaseio.com",
  projectId: "curious-rose-alibay",
  storageBucket: "curious-rose-alibay.appspot.com",
  messagingSenderId: "946803609775"
};

const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider()


  // const itemsBoughtRef = database.ref("itemsBought") // database node recording all users' bought items as listing ID numbers
  // const itemsSoldRef = database.ref("itemsSold") //same for sold items
  // const allItemsRef = database.ref("allItems") //node recording all items whether sold or bought

  // firebase.initializeApp(config);
  // const database = firebase.database();
  // const storage = firebase.storage();
  // const storageRef = storage.ref();
  ;


class App extends Component {
  constructor() {
    super();
    //Hardcoding logged in user as id:1000
    this.state = {
      currentUserEmail: null,
      currentUserUID: 0,
      searchTerm: ''
    }
  }


  componentDidMount() {
    localStorage.getItem('userEmail') ?
    console.log('localStorage has the email', localStorage.getItem('userEmail') ) :
    console.log('local storage has no email')

    console.log("state: ", this.state)
  
  }

  handleSignIn = (event) => {

    if (this.state.currentUserEmail === null) {
      firebase.auth()
        .signInWithPopup(provider)
        .then(userData => {
          console.log('user data', userData)
          localStorage.setItem('userEmail', userData.user.email) 
          this.setState({
            currentUserEmail: userData.user.email,
            currentUserUID: userData.user.uid
          })
        })
    } else { console.log('not working') }
  }

  handleSignOut = (event) => {
    delete localStorage.userID;
    this.setState({
      currentUserId: null
    })

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar action={this.handleSignIn} userUID={this.state.currentUserUID} userEmail ={this.state.currentUserEmail} updateSearchTerm={(searchTerm) => (this.setState({ searchTerm }))} reaction={this.handleSignOut} />
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/sellstuff" render={() => this.state.currentUserEmail ? (<SellStuff userUID={this.state.currentUserUID} />) : null } />
            <Route path="/accountpage" render={() => this.state.currentUserEmail ? (<AccountPage userUID={this.state.currentUserUID} />) : null } />
            <Route path="/shopall" render={() => (<ShopAll userUID={this.state.currentUserUID} searchTerm={this.state.searchTerm} />)} />
          </div>
          <footer>Curious Rose</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
