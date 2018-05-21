import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <BrowserRouter>
          <div className="routes">
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
