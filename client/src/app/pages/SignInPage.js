import React, { } from 'react';

import { useAuth } from '../services';

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
    <div className="page--sign-in">
      {!currentUser
        ? (
          <div className="">
            <button className="btn--facebook-sign-in" onClick={(ev) => handleLoginWithFacebook(ev)}>Facebook</button>
          </div>
        )
        : (
          <div className="">
            <button className="btn--sign-out" onClick={(ev) => handleLogout(ev)}>Logout</button>
          </div>
        )
      }
    </div>
  );
};

export default SignInPage;