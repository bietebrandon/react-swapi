import React, { Component } from 'react';
import './Container.css';
import DataItem from '../DataItem/DataItem';


class Container extends Component {
  render () {

    let dataItems = [];

    for(let i=0; i<5;i++){
      dataItems.push(<DataItem key={i} name={i} />);
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
