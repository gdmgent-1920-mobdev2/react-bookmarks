import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { Header } from '../components/base';

const BaseLayout = ({children}) => (
  <Fragment>
    <Header />
    <main className={classnames('app-main')}>
      { children }      
    </main>
  </Fragment>
);
export default BaseLayout;