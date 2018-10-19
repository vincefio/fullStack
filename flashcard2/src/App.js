import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProject from './components/AddProject'
import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'

class App extends Component {
  render() {
    //<Route exact path="/" render={() => <Home />} />
    return (

      <div className="App">
        <Nav />


        <Route exact path='/' component={Home} />
        <Route path="/addProject" component={AddProject} />
        <Route path="/projects" component={Projects} />
      </div>

    );
  }
}

export default App;
