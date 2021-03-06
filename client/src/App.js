import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import Survey from './pages/Survey';
import Summary from './pages/Summary';
import './App.style.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/summary"
          render={props => <Summary {...props} cookies={this.props.cookies} />}
        />
        <Route
          exact
          path="/:id"
          render={props => <Survey {...props} cookies={this.props.cookies} />}
        />
        <Route
          exact
          path="/"
          render={props => <Survey {...props} cookies={this.props.cookies} />}
        />
      </Switch>
    );
  }
}

export default withCookies(App);
