import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import { useAuth } from '../services';
import * as Routes from '../routes';

const renderMergedProps = (component, layout, routeProps) => {
  return (layout) ? React.createElement(layout, routeProps, React.createElement(component, routeProps)) : React.createElement(component, routeProps);
};

const AuthRouteWithLayout = ({ component, layout, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route {...rest} render={routeProps => {
      return !!currentUser ? (
        renderMergedProps(component, layout, routeProps)
      ) : (
        <Redirect to={Routes.AUTH_SIGN_IN} />
      );
    } 
    }/>
  );
};

export default AuthRouteWithLayout;