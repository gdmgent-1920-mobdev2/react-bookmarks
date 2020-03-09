import React, { } from 'react';

import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

import Navigation from './Navigation';

import './Header.scss';

const Header = ({children}) => {
  return (
    <header className="header">
      <Navigation />
    </header>
  );
};

export default Header;