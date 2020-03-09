import React, { Fragment, useState, useEffect } from 'react';

import './PageTitle.scss';

const PageTitle = ({pageTitle = 'This is the title', pageDescription = 'This is the description'}) => {
  return (
    <header className="page-title">
      <h1>{pageTitle}</h1>
      <h2>{pageDescription}</h2>
    </header>
  );
};

export default PageTitle;