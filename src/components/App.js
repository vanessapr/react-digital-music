import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Topbar from './Topbar';
import PrivateRoute from './PrivateRoute';
import Login from './Login/Login';
import TopArtistsContainer from './artists/TopArtistsContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Topbar />
          <div className="grid-x grid-padding-x">
            <div className="cell medium-4 medium-cell-block-y">
              <ul className="vertical menu">
                <li><NavLink exact to="/">Top Artists</NavLink></li>
                <li><NavLink to="/">Your favorite artists</NavLink></li>
              </ul>
            </div>
            <div className="cell medium-8 medium-cell-block-y">
              <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/" component={TopArtistsContainer} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
