import React, { Component } from 'react';
import logo from './logo.svg';
import FormContainer from './FormContainer';
import Recording from './Recording';

import './App.css';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

class App extends Component {
  render() {
    console.log("HI");
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={FormContainer} />
          <Route path="/recording" component={Recording} />
        </Switch>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
