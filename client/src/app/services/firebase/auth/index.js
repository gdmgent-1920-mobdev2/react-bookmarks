import { default as React, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useFirebase } from '../..';

const AuthContext = React.createContext(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
  const { app } = useFirebase();

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('react-bookmarks:authUser')));

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      localStorage.setItem('react-bookmarks:authUser', JSON.stringify(user));
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const loginWithProvider = async (provider) => {
    return app.auth().signInWithPopup(provider);
  }

  const loginWithFacebook = async (options) => {
    const { scope } = options || {};
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    facebookProvider.addScope(scope || 'user_birthday');
    return loginWithProvider(facebookProvider);
  }

  const logout = async () => {
    localStorage.setItem('react-bookmarks:authUser', null);
    return app.auth().signOut();
  }

  return (
    <AuthContext.Provider value={{ currentUser, loginWithFacebook, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export {
  AuthContext,
  AuthProvider,
  useAuth,
}