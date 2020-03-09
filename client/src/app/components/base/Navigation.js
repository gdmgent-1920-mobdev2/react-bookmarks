import React, { } from 'react';

import { Link, NavLink  } from 'react-router-dom';
import * as Routes from '../../routes';

import AuthenticationNavigation from './AuthenticationNavigation';

const Navigation = ({children}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navigation">
      <h1 className="navbar-brand">
        <Link to={Routes.LANDING} className="logo__link">New Media Development</Link>
      </h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to={Routes.HOME} activeClassName="active">Home</NavLink>
          </li>          
        </ul>
        <AuthenticationNavigation />
      </div>
    </nav>
  );
};

export default Navigation;