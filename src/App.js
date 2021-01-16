import React from "react";
import { Route} from 'react-router-dom';
import DrawingApp from "./DrawingApp/DrawingApp"

function App() {
    return (
      <div>
        <div>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/drawing' component={DrawingApp} />
        </div>
  
      </div>
    );
  }
  
  const Welcome = props => {
    return (
      <div className="landing">
      <div className="welcome">
      <h2 className="title">Welcome to the Drawing app!</h2>
      <p className="content">The drawing app allows you to draw and add your art to the online gallery. The gallery will display drawings added in the last 7 days!</p>
      <button className="enter" onClick={() => { props.history.push('/drawing') }}>Enter</button>
      </div>
      </div>
    );
  }
  
  export default App;