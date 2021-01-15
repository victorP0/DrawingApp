
// make React available
import React,  { useContext } from 'react';
import { ArtsContext } from "../Context";

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the component available
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Gallery from '../components/Gallery';


// this is the test case
it('Gallery without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here

  ReactDOM.render(
    <ArtsContext.Provider value={[[], ()=>{}]}>
      <Gallery />
    </ArtsContext.Provider>
  , div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});