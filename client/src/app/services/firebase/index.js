import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';

import { AuthContext, AuthProvider, useAuth } from './auth';
import { FirestoreContext, FirestoreProvider, useFirestore } from './firestore';
import { firebaseConfig } from '../../config';

const FirebaseContext = React.createContext(null);
const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({children}) => {
  const [app] = useState(!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app());

  return (
    <FirebaseContext.Provider value={{app}}>
      {children}
    </FirebaseContext.Provider>
  )
};

export {
  AuthContext,
  AuthProvider,
  FirebaseContext,
  FirebaseProvider,
  FirestoreContext,
  FirestoreProvider,
  useAuth,
  useFirebase,
  useFirestore,
}