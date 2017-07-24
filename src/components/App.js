import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import store from '../configureStore';
import firebaseApp from '../utils/firebase';
import TopbarContainer from './Topbar/TopbarContainer';
import PrivateRoute from './PrivateRoute';
import LoginContainer from './Login/LoginContainer';
import SignUp from './Login/SignUp';
import ProfileContainer from './Users/ProfileContainer';
import TopArtistsContainer from './artists/TopArtistsContainer';
import FavoriteArtistsContainer from './artists/FavoriteArtistsContainer';

class App extends Component {
  componentWillMount() {
    store.dispatch({ type: 'AUTH_STATUS' });
    firebaseApp.auth().onAuthStateChanged( user => {
      if (user) {
        // window.localStorage.setItem('uid', user.uid);
        store.dispatch({ type: 'AUTH_STATUS_SUCCESS', payload: user });
      } else {
        // window.localStorage.removeItem('uid');
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
              <ProfileContainer />
              <ul className="vertical menu list-square">
                <li><NavLink exact to="/">Top Artists</NavLink></li>
                <li><NavLink to="/your_artists">Your favorite artists</NavLink></li>
              </ul>
            </div>
            <div className="cell medium-8 medium-cell-block-y">
              <Switch>
                <PrivateRoute path="/" exact component={TopArtistsContainer} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={LoginContainer} />
                <PrivateRoute path="/your_artists" component={FavoriteArtistsContainer} />
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
