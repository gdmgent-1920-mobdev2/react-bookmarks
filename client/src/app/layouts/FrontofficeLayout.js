import React, { Fragment, useState } from 'react';
import { Sidebar } from '../components/frontoffice';

import './FrontofficeLayout.scss';

const FrontofficeLayout = ({children}) => {
  return (
    <div className="layout__frontoffice">
      <Sidebar />
      <main className="main">
        {children}
      </main>
    </div>
  )
};
export default FrontofficeLayout;