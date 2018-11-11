import React from 'react';
import ReactDOM from 'react-dom';
import ControlBar from './ControlBar';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

describe('ControlBar', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlBar/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});