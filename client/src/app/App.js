import React from 'react';

import { BookmarkProvider, FirebaseProvider, ProxyProvider, FirestoreProvider } from './services';

import './App.css';
import { SEOSearch } from './components';

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <FirestoreProvider>
          <ProxyProvider>
            <BookmarkProvider>
              <SEOSearch></SEOSearch>
            </BookmarkProvider>  
          </ProxyProvider>
        </FirestoreProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
