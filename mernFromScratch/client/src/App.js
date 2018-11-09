import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation'
import Home from './components/Home'
import Categories from './components/Categories'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Categories />
          {/*Routing*/}
          <Route exact path="/" component={Home} />
        </div>

      </Router>
    );
  }
}

export default App;
