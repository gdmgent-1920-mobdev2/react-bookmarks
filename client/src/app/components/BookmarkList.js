import React, { Fragment, useState, useEffect } from 'react';

import { useFirestore } from '../services';

import './BookmarkList.css';

const BookmarkList = ({children}) => {
    //const [bookmarks, setBookmarks] = useState(null);
    const { bookmarks, getBookmarks } = useFirestore();

    /*useEffect(() => {        
        const fetchBookmarks = async () => {
            const bm = await getBookmarks();
            setBookmarks(bm);
        }
        fetchBookmarks();
    }, []);*/

    return (
        <div className="bookmark-list">
            {
                !!bookmarks
                    ? <ul className="bookmark-list__ul">
                        { bookmarks.map((reference) => {
                            return (<div className="bookmark-list__item" key={reference.uid}>
                                <h1 className="title">{reference.title}</h1>
                                {reference.image ? <picture className="picture"><img src={reference.image} /></picture> : <Fragment></Fragment>}
                            </div>)
                        })}
                      </ul> 
                    : <Fragment>LOADINGS</Fragment>
            }
        </div>
    );
};

export default BookmarkList;