import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Selector from './components/Selector/Selector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Selector />
        <Container />
      </div>
    );
  }
}

export default App;
