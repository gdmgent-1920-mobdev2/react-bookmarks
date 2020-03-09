import React, { } from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../../services';
import * as Routes from '../../routes';

import BookmarkTree from './BookmarkTree';

import './Sidebar.scss';

const Sidebar = ({children}) => {
  const { currentUser, logout } = useAuth();

  const handleLogout = (ev) => {
    ev.preventDefault();

    logout();
  }

  return (
    <section className="sidebar">
      <section className="sidebar__primary">
        <h1 className="logo">
          <Link to={Routes.LANDING} className="logo__link">New Media Development</Link>
        </h1>
        <ul className="navbar-nav flex-grow-1">
          <li className="nav-item">
            <Link className="btn" to={Routes.FRONTOFFICE_BOOKMARKS_ADD}>+</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="profile-image" src={currentUser.photoURL} />
            </a>
            <div className="dropdown-menu dropdown-menu-top" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to={Routes.FRONTOFFICE}>Go to Dashboard</Link>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" onClick={(ev) => handleLogout(ev)}>Logout</a>
            </div>
          </li>
        </ul>
      </section>
      <section className="sidebar__secondary">
        <BookmarkTree />
      </section> 
    </section>
  );
};

export default Sidebar;