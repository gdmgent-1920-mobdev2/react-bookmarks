import React, { useContext, useState, useEffect } from 'react';
import { BookmarkContext, ProxyContext, useFirestore } from '../services';

import SEOSearchResult from './SEOSearchResult';

import './SEOSearch.css';

const SEOSearch = ({}) => {
    const [ url, setUrl ] = useState('');
    const [ searchResult, setSearchResult ] = useState('');
    const { getBookmarks } = useFirestore();

    useEffect(() => {        
        async function fetchBookmarks (){
            const bm = await getBookmarks();
            console.log(bm);
        }
        fetchBookmarks();
    }, []);

    const { getSEO } = useContext(ProxyContext);
    const { bookmarks, addBookmark, removeBookmark } = useContext(BookmarkContext);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const result = await getSEO(url);
        setSearchResult(result);
    };

    return (
        <div className="seo-search">
            <form className="url-form" onSubmit={handleSubmit}>
                <input type="text" required placeholder="write your url..." onChange={(ev) => setUrl(ev.target.value)} value={url} />
                <input type="submit" value="Get SEO" />
            </form>
            <SEOSearchResult searchResult={searchResult} />
        </div>
    );
};

export default SEOSearch;