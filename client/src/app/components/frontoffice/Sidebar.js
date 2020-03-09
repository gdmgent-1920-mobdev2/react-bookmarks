import React, { } from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

import BookmarkTree from './BookmarkTree';

import './Sidebar.scss';

const Sidebar = ({children}) => {
  return (
    <section className="sidebar">
      <section className="sidebar__primary">
      </section>
      <section className="sidebar__secondary">
        <BookmarkTree />
      </section> 
    </section>
  );
};

export default Sidebar;