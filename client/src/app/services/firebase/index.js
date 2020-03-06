import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';

import { FirestoreContext, FirestoreProvider, useFirestore } from './firestore';
import { firebaseConfig } from '../../config';

const FirebaseContext = React.createContext(null);
const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({children}) => {
    const [app] = useState(firebase.initializeApp(firebaseConfig));

    return (
        <FirebaseContext.Provider value={{app}}>
            {children}
        </FirebaseContext.Provider>
    )
};

export {
    FirebaseContext,
    FirebaseProvider,
    FirestoreContext,
    FirestoreProvider,
    useFirebase,
    useFirestore,
}