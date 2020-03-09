import React, { Fragment, useState, useEffect } from 'react';

import { useFirestore } from '../../services';

import './BookmarkList.scss';

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
            ? <div className="row align-items-stretch bookmark-list__ul">
              { bookmarks.map((reference) => {
                return (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="card bookmark-list__item" key={reference.uid}>
                    {reference.image ? <picture className="card-img-top picture"><img src={reference.image} /></picture> : <picture className="card-img-top picture picture--no-img"></picture>}
                    <div class="card-body">
                      <h5 class="card-title">{reference.title}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>)
              })}
              </div> 
            : <Fragment>LOADINGS</Fragment>
        }
      </div>
    );
};

export default BookmarkList;