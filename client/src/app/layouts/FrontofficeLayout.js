import React, { Fragment, useState } from 'react';
//import { Navigation } from '../components';

import './FrontofficeLayout.scss';

const FrontofficeLayout = ({children}) => {
  return (
    <div className="layout">
      <main className="main">
        {children}
      </main>
    </div>
  )
};
export default FrontofficeLayout;