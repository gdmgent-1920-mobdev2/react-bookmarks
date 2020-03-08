import React, { } from 'react';

import { ProxyProvider } from '../services';

import { BookmarkList, SEOSearch } from '../components';

const AppPage = ({children}) => {
  return (
    <ProxyProvider>
      <div className="dashboard">
        AppPage
      </div>
    </ProxyProvider>
  );
};

export default AppPage;

/*
<BookmarkList />
      <SEOSearch></SEOSearch>
      */