import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import store from '../configureStore';
import firebaseApp from '../utils/firebase';
import TopbarContainer from './Topbar/TopbarContainer';
import PrivateRoute from './PrivateRoute';
import LoginContainer from './Login/LoginContainer';
import TopArtistsContainer from './artists/TopArtistsContainer';
import FavoriteArtists from './artists/FavoriteArtists';

class App extends Component {
  componentDidMount() {
    store.dispatch({ type: 'AUTH_STATUS' });
    firebaseApp.auth().onAuthStateChanged( user => {
      if (user) {
        window.localStorage.setItem('uid', user.uid);
        store.dispatch({ type: 'AUTH_STATUS_SUCCESS', payload: user });
      } else {
        window.localStorage.removeItem('uid');
        store.dispatch({ type: 'AUTH_STATUS_FAILED'});
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <TopbarContainer />
          <div className="grid-x grid-padding-x">
            <div className="cell medium-4 medium-cell-block-y">
              <ul className="vertical menu">
                <li><NavLink exact to="/">Top Artists</NavLink></li>
                <li><NavLink to="/your_artists">Your favorite artists</NavLink></li>
              </ul>
            </div>
            <div className="cell medium-8 medium-cell-block-y">
              <Switch>
                <Route path="/login" component={LoginContainer} />
                <PrivateRoute path="/" exact component={TopArtistsContainer} />
                <Route path="/your_artists" component={FavoriteArtists} />
                <Route path="/public" render={() => <div>public.. </div> } />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
