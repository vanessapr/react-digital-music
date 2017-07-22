import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => false;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={ props => (
      isAuthenticated() ? (
        <Component {...props} />
      ): (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
    )} />
  );
};

export default PrivateRoute;

//
// const PrivateRoute = ({ render, auth, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={auth === true ? render : props => <Redirect to="/" />}
//     />
//   );
// };
