import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="App">
            <header className="App-header">
              <h1>oh shittt</h1>
            </header>
          </div>
          {/*Routing*/}
          <Route exact path="/" component={Home} />
        </div>

      </Router>
    );
  }
}

export default App;
