import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import DisplayStocks from './components/DisplayStocks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1>we go hard</h1>
        <DisplayStocks />

      </div>
    );
  }
}

export default App;
