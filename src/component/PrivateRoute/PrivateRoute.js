import React from 'react';
import { Redirect, Route } from 'react-router';
import { auth } from '../Login/SignIn';
import { logAuth } from '../Login/Login';

const PrivateRoute = ({ children, ...rest }) => {

    return (
        <Route
        {...rest}
        render={({ location }) =>
          auth === true || logAuth === true ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;