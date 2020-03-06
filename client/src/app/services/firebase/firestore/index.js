import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useFirebase } from '../..';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
    const { app } = useFirebase();
    const db = app.firestore();

    const getBookmarks = async () => {
        const query = db.collection('bookmarks');
        const snapshot = await query.get();
        const bookmarks = snapshot.docs.map((doc) => {
            return { uid: doc.id, ...doc.data()};
        });
        return bookmarks;
    };

    return (
        <FirestoreContext.Provider value={{getBookmarks}}>
            {children}
        </FirestoreContext.Provider>
    )
};

export {
    FirestoreContext,
    FirestoreProvider,
    useFirestore,
}