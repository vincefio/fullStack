import React, { Component } from 'react';
import CreateProject from './components/CreateProject'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lets Rock N Roll</h1>
        </header>
        <CreateProject />
      </div>
    );
  }
}

export default App;
