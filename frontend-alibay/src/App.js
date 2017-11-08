import React, { Component } from 'react';
import './App.css';
import AccountPage from './components/AccountPage'
import CreateAccount from './components/CreateAccount'
import LandingPage from './components/LandingPage'
import SellStuff from './components/SellStuff'
import SearchResults from './components/SearchResults'
import ShopAll from './components/ShopAll'
import SignIn from './components/SignIn'
import NavBar from './components/Navbar'
// import ItemPage from './components/ItemPage'
import { BrowserRouter, Link, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <NavBar/>
            <div>
              <Route path="/" component={LandingPage} />
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
