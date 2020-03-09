import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useFirestore } from '../../services';

import './BookmarkTree.scss';

const BookmarkTree = ({children}) => {
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
      <div className="bookmark-tree">
        {
          !!bookmarks
            ? <ul className="list-group">
              { bookmarks.map((reference) => {
                return (
                <li className="list-group-item" key={reference.uid}>
                  <Link className="" to={`/app/bookmarks/${reference.uid}`}>
                    {reference.image ? <picture className="pull-left picture"><img src={reference.image} /></picture> : <picture className="pull-left picture picture--no-img"></picture>}
                    {reference.title}
                  </Link>
                </li>)
              })}
              </ul> 
            : <Fragment>LOADINGS</Fragment>
        }
      </div>
    );
};

export default BookmarkTree;