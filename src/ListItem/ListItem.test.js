import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

describe('ListItem', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListItem/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});