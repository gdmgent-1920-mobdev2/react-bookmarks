import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../services';
import * as Routes from '../../routes';

const AuthenticationNavigation = ({children}) => {
  const { currentUser, logout } = useAuth();

  const handleLogout = (ev) => {
    ev.preventDefault();

    logout();
  }

  return (
    <ul className="navbar-nav courtesy-navigation">
      {!!currentUser
        ? (
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="profile-image" src={currentUser.photoURL} />
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to={Routes.FRONTOFFICE}>Go to Dashboard</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" onClick={(ev) => handleLogout(ev)}>Logout</Link>
            </div>
          </li>
        )
        : (
          <li className="nav-item">
            <Link className="nav-link" to={Routes.AUTH_SIGN_IN}>Sign In</Link>
          </li>
        )
      }
    </ul>
  );
};

export default AuthenticationNavigation;