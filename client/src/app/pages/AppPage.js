import React, { } from 'react';
import { Route, Redirect } from 'react-router-dom';

import * as Routes from '../routes';
import { ProxyProvider } from '../services';

import { BookmarkList } from '../components/frontoffice';
import BookmarkDetailPage from './BookmarkDetailPage';
import DashboardPage from './DashboardPage';

const AppPage = ({children}) => {
  return (
    <ProxyProvider>
      <Redirect from={Routes.FRONTOFFICE} to={Routes.FRONTOFFICE_DASHBOARD}/>
      <Route path="/app/dashboard" component={ DashboardPage }/>
      <Route path="/app/bookmarks/:id" component={ BookmarkDetailPage }/>
    </ProxyProvider>
  );
};

export default AppPage;