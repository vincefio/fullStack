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
            <Nav />

            <Route exact path="/" component={Home} />
            <Route exact path="/stocks" component={MyStocks} />
            <Route exact path="/chart" component={StockChart} />

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
