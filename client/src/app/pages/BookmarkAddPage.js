import React, { } from 'react';
import { PageTitle, SEOSearch } from '../components/frontoffice';

const BookmarkAddPage = ({children}) => {
  return (
    <div>
      <PageTitle pageTitle="Add Bookmark" pageDescription="Add an URL in order to extract the SEO information" />
      <div className="container-fluid">
        <SEOSearch />
      </div>
    </div>
  );
};

export default BookmarkAddPage;