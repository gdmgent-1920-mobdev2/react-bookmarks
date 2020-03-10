import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useFirebase } from '../..';
import { useAuth } from '../auth';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
    const [bookmarks, setBookmarks] = useState();
    const { app } = useFirebase();
    const { currentUser } = useAuth();
    const db = app.firestore();

    const getBookmarks = async (userId) => {
      const query = db.collection('bookmarks').doc(userId).collection('folders').doc('uncategorized').collection('references');
      const snapshot = await query.get();
      const bookmarks = snapshot.docs.map((doc) => {
          return { uid: doc.id, ...doc.data()};
      });
      return bookmarks;
    };

    const createBookmark = async (userId, bookmark) => {
      return await db.collection('bookmarks').doc(userId).collection('folders').doc('uncategorized').collection('references').add(bookmark);
    };

    useEffect(() => {
      const unsubscribe = db.collection('bookmarks').doc(currentUser.uid).collection('folders').doc('uncategorized').collection('references')
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
      <FirestoreContext.Provider value={{bookmarks, createBookmark, getBookmarks}}>
        {children}
      </FirestoreContext.Provider>
    )
};

export {
    FirestoreContext,
    FirestoreProvider,
    useFirestore,
}