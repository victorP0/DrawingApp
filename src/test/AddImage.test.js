// make React available
import React,  { useContext } from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import AddImage from '../components/AddImage';

// this is the test case
it('Adds image without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<AddImage  canvas={{current: null}} ctx={{current:null}} />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});