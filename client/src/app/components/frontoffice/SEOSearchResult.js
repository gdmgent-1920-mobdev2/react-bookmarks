import React, { Fragment } from 'react';

const SEOSearchResult = ({children, searchResult}) => {

    return (
        <div className="seo-search-result">
            {!!searchResult
                ? <div>
                    <header className="seo-search-result__header">
                        <h1 className="seo-search-result__title">{searchResult.title}</h1>
                        <h2 className="seo-search-result__description">{searchResult.description}</h2>
                    </header>                    
                    <picture className="seo-search-result__picture">
                        <img src={searchResult.icon} />
                    </picture>
                  </div>
                : <Fragment></Fragment>
            }
        </div>
    );
};

export default SEOSearchResult;