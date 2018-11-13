import React from 'react';
import ReactDOM from 'react-dom';
import FilterableList from './FilterableList';

describe('FilterableList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterableList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});