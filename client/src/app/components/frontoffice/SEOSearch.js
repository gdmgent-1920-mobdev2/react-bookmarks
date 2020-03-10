import React, { useContext, useState, useEffect, Fragment } from 'react';
import { ProxyContext, useFirestore } from '../../services';

import SEOSearchResult from './SEOSearchResult';

const SEOSearch = ({}) => {
    const [ url, setUrl ] = useState('');
    const [ searchResult, setSearchResult ] = useState('');

    const { getSEO } = useContext(ProxyContext);
    const { createBookmark } = useFirestore();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const result = await getSEO(url);
        setSearchResult(result);
    };

    const handleAddBookmark = async (ev) => {
      const bookmark = {
        url: searchResult.url ? searchResult.url : null,
        title: searchResult.title ? searchResult.title : null,
        description: searchResult.description ? searchResult.description : null,
        icon: searchResult.icon ? searchResult.icon : null,
        image: searchResult.image ? searchResult.image : null,
        keywords: searchResult.keywords ? searchResult.keywords : null,
        type: searchResult.type ? searchResult.type : null,
        provider: searchResult.provider ? searchResult.provider : null,
        language: searchResult.language ? searchResult.language : null
      }
      createBookmark(bookmark);
      setSearchResult(null);
  };

    return (
      <div className="seo-search">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <form className="url-form" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input type="text" className="form-control" required placeholder="write your url..." onChange={(ev) => setUrl(ev.target.value)} value={url} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <input className="btn btn-outline-secondary" type="submit" id="button-addon2" value="GetSEO" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <SEOSearchResult searchResult={searchResult} />
          </div>
          {!!searchResult ? <button className="btn btn-lg btn-primary btn-block btn--save-bookmark" onClick={(ev) => handleAddBookmark(ev)}>Save Bookmark</button> : <Fragment></Fragment>
          }
        </div>
      </div>
    );
};

export default SEOSearch;