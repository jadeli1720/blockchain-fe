import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <p>Hello React App</p>
      <Switch>
        <Route path={'/hello'} component ={Hello}/>
      </Switch>
    </div>
  );
}

export default App;
