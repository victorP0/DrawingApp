// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the component available
import IncreaseBrush from '../components/IncreaseBrush';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<IncreaseBrush />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});