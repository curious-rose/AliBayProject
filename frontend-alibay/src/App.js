import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AccountPage from './components/AccountPage'
import CreateAccount from './components/CreateAccount'
import ItemPage from './components/ItemPage'
import LandingPage from './components/LandingPage'
import SellStuff from './components/SellStuff'
import SearchResults from './components/SearchResults'
import ShopAll from './components/ShopAll'
import SignIn from './components/SignIn'
import { Link, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <SellStuff />

      </div>
    );
  }
}

export default App;
