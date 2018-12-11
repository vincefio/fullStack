import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './components/Nav'
import DisplayStocks from './components/DisplayStocks'
import MyStocks from './components/MyStocks'
import StockChart from './components/StockChart'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './store'


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Home />

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
