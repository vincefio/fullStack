import React, { Component } from 'react';
import CreateProject from './components/CreateProject'
import AddFlashCard from './components/AddFlashCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFlashCard />
        <header>
          <h1>Lets Rock N Roll</h1>
        </header>
        <CreateProject />
      </div>
    );
  }
}

export default App;
