import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {
  render() {
    const list = this.props.files 
      ? this.props.files.map((file, key) => <ListItem {...file} key={key} />)
      : null; 
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}

export default FilterableList;