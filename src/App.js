import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Selector from './components/Selector/Selector';

class App extends Component {
  constructor(props){
    super(props)

    this.onHandleChange = this.onHandleChange.bind(this)
    this.state = { choice: 'people'}
  }

  onHandleChange(e) {
    this.setState({
      choice: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Selector choice={this.state.choice} onHandleChange={this.onHandleChange}/>
        <Container choice={this.state.choice}/>
      </div>
    );
  }
}

export default App;
