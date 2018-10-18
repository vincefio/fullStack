import React, { Component } from 'react';
import { Router, Route } from 'react-router'
//import { Route, Link } from 'react-router-dom'
import AddProject from './components/AddProject'
import Nav from './components/Nav'
import Home from './components/Home'

class App extends Component {
  render() {
    //<Route exact path="/" render={() => <Home />} />
    return (
      <div className="App">
        <Nav />
        
        <AddProject />
      </div>
    );
  }
}

export default App;
