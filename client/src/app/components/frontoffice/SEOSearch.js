import React, { useContext, useState, useEffect } from 'react';
import { ProxyContext, useFirestore } from '../../services';

import SEOSearchResult from './SEOSearchResult';

const SEOSearch = ({}) => {
    const [ url, setUrl ] = useState('');
    const [ searchResult, setSearchResult ] = useState('');

    const { getSEO } = useContext(ProxyContext);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const result = await getSEO(url);
        setSearchResult(result);
    };

    return (
      <div className="seo-search">
        <form className="url-form" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" required placeholder="write your url..." onChange={(ev) => setUrl(ev.target.value)} value={url} aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
              <input className="btn btn-outline-secondary" type="submit" id="button-addon2" value="GetSEO" />
            </div>
          </div>
        </form>
        <SEOSearchResult searchResult={searchResult} />
      </div>
    );
};

export default SEOSearch;