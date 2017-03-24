import React, {Component} from 'react';
import './Selector.css';

class Selector extends Component {
  render() {
    return (
      <div className='Selector'>
        <select className='Select-list' onChange={this.props.onHandleChange}>
          <option className='Select-list-item' value='people'>People</option>
          <option className='Select-list-item' value='starships'>Starships</option>
          <option className='Select-list-item' value='vehicles'>Vehicles</option>
          <option className='Select-list-item' value='planets'>Planets</option>
        </select>
      </div>
    )
  }
}

export default Selector;
