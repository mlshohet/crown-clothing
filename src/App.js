import React from 'react';
import { Switch, Route } from 'react-router-dom'; //Routing form React

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
    <div>
      <h1>HATS </h1>
    </div>
  );

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
