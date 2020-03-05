import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BookmarkContext = createContext();

const BookmarkProvider = ({children}) => {
    const [ bookmarks, setBookmarks ] = useState(JSON.parse(localStorage.getItem('bookmarkapp.bookmarks')) || []);

    useEffect(() => {
        localStorage.setItem('bookmarkapp.bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks])

    const addBookmark = (bookmark) => {
        setBookmarks([
            ...bookmarks,
            {
                id: uuidv4(),
                title: bookmark.title,
                description: bookmark.description,
                createdAt: Date.now()
            }
        ]);
    };

    const removeBookmark = (id) => {
        setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
    };

    return (
        <BookmarkContext.Provider value={{bookmarks, addBookmark, removeBookmark}}>
            {children}
        </BookmarkContext.Provider>
    )
};

export {
    BookmarkContext,
    BookmarkProvider,
}