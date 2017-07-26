import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../configureStore';

const PrivateRoute = ({ component: Component, auth, title, ...rest }) => {
  const isLoggedIn = store.getState().login.isLoggedIn;
  return (
    <Route {...rest} render={ props => {
      props.title = title;
      props.uid = auth.uid;

      return (
        !!auth || isLoggedIn?
        <Component {...props} />
      :
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
    }

    } />
  );
};

export default PrivateRoute;
