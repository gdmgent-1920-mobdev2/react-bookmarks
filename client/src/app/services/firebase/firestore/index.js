import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useFirebase } from '../..';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
    const [bookmarks, setBookmarks] = useState();
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

    const loadRealtimeBookmarks = async () => {
        db.collection("bookmarks").doc("SF")
        .onSnapshot((doc) => {
            console.log("Current data: ", doc.data());
        });
    }

    useEffect(() => {
        const unsubscribe = db.collection("bookmarks")
        .onSnapshot((snapshot) => {
            if (snapshot.size) {
                const data = [];
                snapshot.forEach(doc =>
                    data.push({ uid: doc.id, ...doc.data() })
                )
                setBookmarks(data);
            } else {
                console.log('empty');
            }
        });

        return () => unsubscribe();
    }, []);
 
    return (
        <FirestoreContext.Provider value={{bookmarks, getBookmarks}}>
            {children}
        </FirestoreContext.Provider>
    )
};

export {
    FirestoreContext,
    FirestoreProvider,
    useFirestore,
}