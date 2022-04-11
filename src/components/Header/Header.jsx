import React from 'react';
import Styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={Styles.Header}>
            <h1>Search Google Books</h1>
            <p>
                This is a simple React.js application that allows you
                to search the Google Books API for information on
                books. Click on each book to see more information.
            </p>
        </div>
    );
};
