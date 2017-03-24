import React, { Component } from 'react';
import './Container.css';
import DataItem from '../DataItem/DataItem';


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiChoice: 'people',
      data: []
    }

    this.retrieveData = this.retrieveData.bind(this);
    this.retrieveNames = this.retrieveNames.bind(this);
  }

  retrieveData(props) {
      fetch(`http://swapi.co/api/${this.props.choice}/`)
        .then(result => result.json())
        .then(finalResult => this.retrieveNames(finalResult))
        .catch(error => console.log(error))
  }

  retrieveNames(data) {
    let names = []

    for(let i=0;i < data.results.length;i++) {
      names.push(data.results[i].name);
    }

    this.setState({
      apiChoice: this.props.choice,
      data: names
    })
  }

  render () {

    if(this.state.data.length === 0 || this.state.apiChoice !== this.props.choice) {
      this.retrieveData()
    }


    let dataItems = [];

    for(let i=0; i< this.state.data.length;i++){
      dataItems.push(<DataItem key={i} name={this.state.data[i]} />);
    }
    return (
      <div className='Container'>
        <ul>
          { dataItems }
        </ul>
      </div>
    )
  }
}

export default Container;
