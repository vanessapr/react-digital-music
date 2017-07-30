import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import notie from 'notie';
import 'notie/dist/notie.css';
// import store from '../configureStore';

const pagesAdmin = [
  '\\/users\\/*',
  // '\\/users\\/*$' -> only list of users
  // '\\/users\\/new'-> new user
];

function isIncluded(pages, path) {
  return !!pages.filter( page => {
    return new RegExp(page).test(path);
  }).length;
}

export default (auth) => {
  return (ComposedComponent) => {
    return class Authorization extends Component {
      componentWillMount() {
        if (this.isLoggedIn()) {
          if (!this.isAuthorized()) {
            this.props.history.goBack();
            notie.alert({ type: 'error', text: 'Access denied' });
          }
        }

      }

      isAuthorized() {
        const { location: { pathname } } = this.props;
        return !isIncluded(pagesAdmin, pathname) || auth.role === 'admin';
      }

      isLoggedIn() {
        return !!auth;
        // return store.getState().login.isLoggedIn || !!auth;
      }

      render() {

        if (this.isLoggedIn()) {
          if (this.isAuthorized()) {
            return (
              <ComposedComponent auth={auth} {...this.props} />
            );
          } else {
            return null;
          }
        } else {
          return <Redirect to={{
            pathname: '/login',
            state: { from: this.props.location }
          }} />
        }
      }

    }
  }
};
