import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../configureStore';
import firebaseApp from '../utils/firebase';
import TopbarContainer from './Topbar/TopbarContainer';
import Navigation from './Navigation';
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
        <div className="grid-y medium-grid-frame">
          <div className="cell shrink header medium-cell-block-container">
            <TopbarContainer />
          </div>
          <div className="cell medium-auto medium-cell-block-container">
            <div className="grid-x grid-padding-x">
              <div className="cell medium-3 medium-cell-block-y">
                <ProfileContainer />
                <Navigation />
              </div>
              <div className="cell medium-9 medium-cell-block-y">
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
          <div className="cell shrink footer">
            <div className="grid-x grid-padding-x">
              <div className="cell auto">
                <hr />
                <p>Source: </p>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
