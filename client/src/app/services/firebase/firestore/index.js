import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useFirebase } from '../..';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
    const { app } = useFirebase();
    const db = app.firestore();
    console.log(db);

    return (
        <FirestoreContext.Provider value={{}}>
            {children}
        </FirestoreContext.Provider>
    )
};

export {
    FirestoreContext,
    FirestoreProvider,
    useFirestore,
}