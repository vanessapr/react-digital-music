import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../configureStore';
import firebaseApp, { User } from '../utils/firebase';
import { Loading } from './Helpers';
import TopbarContainer from './Topbar/TopbarContainer';
import Navigation from './Navigation';
import LoginContainer from './Login/LoginContainer';
import SignUpContainer from './Login/SignUpContainer';
import ProfileContainer from './Users/ProfileContainer';
import TopArtistsContainer from './Artists/TopArtistsContainer';
import FavoriteArtistsContainer from './Artists/FavoriteArtistsContainer';
import ListUsersContainer from './Users/ListUsersContainer';
import EditUserContainer from './Users/EditUserContainer';
import NewUserContainer from './Users/NewUserContainer';

import Authorization from './Authorization';

class App extends Component {
  state = {
    isLoading: true,
    user: null
  };

  componentDidMount() {
    store.dispatch({ type: 'AUTH_STATUS' });
    firebaseApp.auth().onAuthStateChanged( user => {
      if (user) {
        User.getUser(user.uid).then( data => {
          this.setState({ user: data, isLoading: false });
          store.dispatch({ type: 'AUTH_STATUS_SUCCESS', payload: data });
        });
      } else {
        this.setState({ user: null, isLoading: false });
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
                  <Route path="/" exact component={Authorization(user)(TopArtistsContainer)} />
                  <Route path="/signup" component={SignUpContainer} />
                  <Route path="/login" component={LoginContainer} />
                  <Route path="/your_artists" component={Authorization(user)(FavoriteArtistsContainer)} />
                  <Route path="/profile" component={Authorization(user)(EditUserContainer)} />
                  <Route path="/users" exact component={Authorization(user)(ListUsersContainer)} />
                  <Route path="/users/edit/:id" component={Authorization(user)(EditUserContainer)} />
                  <Route path="/users/new" component={Authorization(user)(NewUserContainer)} />
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
