import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar.js'
import CreateAccount from './CreateAccount.js'
import AccountPage from './AccountPage.js'
import SignIn from '.SignIn.js'
import { Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
