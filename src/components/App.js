import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../configureStore';
import firebaseApp from '../utils/firebase';
import { Loading } from './Helpers';
import TopbarContainer from './Topbar/TopbarContainer';
import Navigation from './Navigation';
import PrivateRoute from './PrivateRoute';
import LoginContainer from './Login/LoginContainer';
import SignUpContainer from './Login/SignUpContainer';
import ProfileContainer from './Users/ProfileContainer';
import UpdateProfileContainer from './Users/UpdateProfileContainer';
import TopArtistsContainer from './artists/TopArtistsContainer';
import FavoriteArtistsContainer from './artists/FavoriteArtistsContainer';
import ListUsersContainer from './Users/ListUsersContainer';

class App extends Component {
  state = {
    isLoading: true,
    user: null
  };

  componentDidMount() {
    store.dispatch({ type: 'AUTH_STATUS' });
    firebaseApp.auth().onAuthStateChanged( user => {
      this.setState({ user: user, isLoading: false });
      if (user) {
        store.dispatch({ type: 'AUTH_STATUS_SUCCESS', payload: user });
      } else {
        store.dispatch({ type: 'AUTH_STATUS_FAILED'});
      }
    });
  }

  render() {
    const { isLoading, user } = this.state;

    return (
      isLoading?
        <Loading />
        :
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
                  <PrivateRoute path="/" exact auth={user} component={TopArtistsContainer} />
                  <Route path="/signup" component={SignUpContainer} />
                  <Route path="/login" component={LoginContainer} />
                  <PrivateRoute path="/your_artists" auth={user} component={FavoriteArtistsContainer} />
                  <PrivateRoute path="/profile" auth={user} component={UpdateProfileContainer} />
                  <PrivateRoute path="/users" auth={user} component={ListUsersContainer} />
                </Switch>
              </div>
            </div>
          </div>
          <div className="cell shrink footer">
            <div className="grid-x grid-padding-x">
              <div className="cell auto">
                <hr />
                <p>Source: <a href="https://github.com/Vanessa85/react-digital-music" target="blank">react-digital-music</a></p>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
