import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


import * as Routes from '../routes';
import { useAuth } from '../services';

import './SignIn.scss';
import logo from '../assets/images/logo.png';


const SignInPage = ({children}) => {
  const { currentUser, loginWithFacebook, logout } = useAuth();

  const handleLoginWithFacebook = (ev) => {
    ev.preventDefault();

    loginWithFacebook();
  }

  const handleLogout = (ev) => {
    ev.preventDefault();

    logout();
  }

  return (
    <div className="text-center page--sign-in">
      <div className="sign-in"> 
      <img class="mb-4" src={logo} alt="" width="160" height="131.4"></img> 
      {!currentUser
        ? (
          <Fragment>
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <button className="btn btn-lg btn-primary btn-block btn--facebook-sign-in" onClick={(ev) => handleLoginWithFacebook(ev)}>Facebook</button>
          </Fragment>
        )
        : (
          <Fragment>
            <Link className="btn btn-lg btn-primary btn-block btn--sign-out" to={Routes.FRONTOFFICE} >Go to Dashboard</Link>
            <button className="btn btn-lg btn-light btn-block btn--sign-out" onClick={(ev) => handleLogout(ev)}>Logout</button>
          </Fragment>
        )
      }
      <p class="mt-5 mb-3 text-muted">© 2006-2020</p>
      </div>
    </div>
  );
};

export default SignInPage;