import React, { Component } from 'react';
import './App.css';
import AccountPage from './components/AccountPage'
import CreateAccount from './components/CreateAccount'
<<<<<<< HEAD
import ItemPage from './components/ItemPage'
=======
>>>>>>> 00ec5f9bce0ca0f7a196e8ce69ea85fbcce8b3e4
import LandingPage from './components/LandingPage'
import SellStuff from './components/SellStuff'
import SearchResults from './components/SearchResults'
import ShopAll from './components/ShopAll'
import SignIn from './components/SignIn'
<<<<<<< HEAD
import { Link, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
=======
import NavBar from './components/NavBar.js'
// import ItemPage from './components/ItemPage'
import { BrowserRouter, Link, Route } from 'react-router-dom'

>>>>>>> 00ec5f9bce0ca0f7a196e8ce69ea85fbcce8b3e4

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
          <SellStuff />
=======
          <NavBar/>
          <BrowserRouter>
            <div>
              <Route path="/" component={LandingPage} />
              <Route path="/createaccount" component={CreateAccount} />
              <Route path="/signin" component={SignIn} />
              <Route path="/sellstuff" component={SellStuff} />
              <Route path="/searchresults" component={SearchResults} />
              <Route path="/accountpage" component={AccountPage} />
              <Route path="/shopall" component={ShopAll} />
            </div>
          </BrowserRouter>
          
>>>>>>> 00ec5f9bce0ca0f7a196e8ce69ea85fbcce8b3e4

      </div>
    );
  }
}

export default App;
