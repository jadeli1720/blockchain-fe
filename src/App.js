import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Hello from './Components/Hello';
import Chain from './Components/Chain';

function App() {
  return (
    <div className="App">
      <p>Hello React App</p>
      <Switch>
        <Route path={'/hello'} component ={Hello}/>
        <Route path={'/chain'} component = { Chain } />
      </Switch>
    </div>
  );
}

export default App;
