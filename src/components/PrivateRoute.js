import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../configureStore';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let isLoggedIn = store.getState().login.isLoggedIn;

  return (
    <Route {...rest} render={ props => (
      isLoggedIn?
        <Component {...props} />
      :
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
    } />
  );
};

export default PrivateRoute;
