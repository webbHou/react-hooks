import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch,Route,Redirect } from 'react-router-dom';

import HOOK from './Hooks';
import HOC from './Hoc';
import Form from './Form';
import Count from './Count';

class App extends Component {
  
  render() {
    return (
      <Switch>
        <Route path="/hook" component={HOOK}  ></Route>
        <Route path="/form" component={Form}  ></Route>
        <Route path="/count" component={Count}  ></Route>
        <Route path="/" component={HOC}  ></Route>
      </Switch>
    );
  }
}

export default App;
