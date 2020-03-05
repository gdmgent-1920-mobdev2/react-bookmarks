import React from 'react';

import { BookmarkProvider, ProxyProvider } from './services';

import './App.css';
import { SEOSearch } from './components';

function App() {
  return (
    <div className="app">
      <ProxyProvider>
        <BookmarkProvider>
          <SEOSearch></SEOSearch>
        </BookmarkProvider>  
      </ProxyProvider>
    </div>
  );
}

export default App;
