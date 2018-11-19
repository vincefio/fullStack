import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './components/Nav'
import DisplayStocks from './components/DisplayStocks'
import MyStocks from './components/MyStocks'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={DisplayStocks} />
          <Route exact path="/stocks" component={MyStocks} />
        </div>
      </Router>
    );
  }
}

export default App;
