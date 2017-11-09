import React, { Component } from 'react';
import './App.css';
import AccountPage from './components/AccountPage'
import CreateAccount from './components/CreateAccount'
import LandingPage from './components/LandingPage'
import SellStuff from './components/SellStuff'
import SearchResults from './components/SearchResults'
import ShopAll from './components/ShopAll'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar'
// import ItemPage from './components/ItemPage'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import backendFunctions from './backend-mockup.js'


// const firebase = require('firebase');



  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyB3i40mpq5TEh0Hsn5WeahXGCumZZ6yfRE",
  //   authDomain: "fir-pro-3eb25.firebaseapp.com",
  //   databaseURL: "https://fir-pro-3eb25.firebaseio.com",
  //   projectId: "fir-pro-3eb25",
  //   storageBucket: "fir-pro-3eb25.appspot.com",
  //   messagingSenderId: "969709962349"
  // };

  // firebase.initializeApp(config);
  // const database = firebase.database();
  // const storage = firebase.storage();
  // const storageRef = storage.ref();
  // const provider = new firebase.auth.GoogleAuthProvider();


class App extends Component {
  constructor() {
    super();
    //Hardcoding logged in user as id:1000
    this.state = {
      currentUserId: null,
      searchTerm: ''             
    }
  }

  // uid should be user email
  // todo: remove hardcoded userID
  componentDidMount() {
    let userId = 1000;
    localStorage.getItem('userID') ? 
    backendFunctions.initializeUserIfNeeded(userId) :
    null;
  }

    handleSignIn = (event) => {
      console.log('handleSignIn');
      let userId = 1000;
      localStorage.setItem('userID', userId);
      backendFunctions.initializeUserIfNeeded(userId);
      this.setState({
        currentUserId: userId
      })

      // if (this.state.currentUser === null) {
      //     firebase.auth()
      //     .signInWithPopup(provider)
      //       .then(userData => {
      //           this.setState({
      //             currentUser: userData
      //           })
      //       })
      //   } else { console.log('not working')}
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
          <NavBar action={this.handleSignIn} updateSearchTerm={(searchTerm)=>(this.setState({searchTerm})) }reaction={this.handleSignOut}/>
            <div>
              <Route path="/landingpage" component={LandingPage} />
              <Route path="/createaccount" component={CreateAccount} />
              <Route path="/signin" component={SignIn} />
              <Route path="/sellstuff" component={SellStuff} />
              <Route path="/searchresults" component={SearchResults} />
              <Route path="/accountpage" component={AccountPage} />
              <Route path="/shopall" render={()=>(<ShopAll searchTerm={this.state.searchTerm}/>) } />
            </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
