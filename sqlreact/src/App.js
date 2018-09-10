import React, { Component } from 'react';
import { Navbar, NavItem, Button, Icon } from 'react-materialize'
import './App.css';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

const DisplayLinks = props => {
  if (props.loggedIn) {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" id="logo" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">
              Home
            </Link></li>
            <li><Link to="#">
              Logout
            </Link></li>
          </ul>
        </div>
      </nav>
    )
  } else {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" id="logo" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">

            <li><Link to="/login">
              Login
            </Link></li>
            <li><Link to="/signup">
              Register
            </Link></li>

          </ul>
        </div>
      </nav>
    )
  }

}


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    // this._logout = this._logout.bind(this)
    //this._login = this._login.bind(this)
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <DisplayLinks loggedIn={this.state.loggedIn} />

          {/*Routes*/}
          <Route exact path="/" render={() => <Home user={this.state.user} />} />
          <Route exact path="/login" render={() => <Login _login={this._login} />} />
          <Route exact path="/signup" component={Signup} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
