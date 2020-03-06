import React from 'react';

import { FirebaseProvider, ProxyProvider, FirestoreProvider } from './services';
import { BookmarkList, SEOSearch } from './components';

import './App.css';


function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <FirestoreProvider>
          <ProxyProvider>
            <BookmarkList />
            <SEOSearch></SEOSearch>
          </ProxyProvider>
        </FirestoreProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
