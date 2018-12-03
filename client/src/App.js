import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Survey from './pages/Survey';
import Summary from './pages/Summary';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/survey/:id" component={Survey} />
          <Route exact path="/summary" component={Summary} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
