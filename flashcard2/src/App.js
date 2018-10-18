import React, { Component } from 'react';
//import {  Router, Route, Link } from 'react-router'
//import { Router, Route, Link } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';
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


        <Route exact path='/' component={Home} />
        <Route path="/addProject" component={AddProject} />
      </div>

    );
  }
}

export default App;
