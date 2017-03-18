import React, { Component } from 'react';
import './DataItem.css';

class DataItem extends Component {
  render() {
    return (
      <li className='DataItem'>{this.props.name}</li>
    )
  }
}

export default DataItem;
