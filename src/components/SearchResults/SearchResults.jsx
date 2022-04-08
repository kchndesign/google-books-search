import React from 'react';
import Styles from './SearchResults.module.scss';

const SearchResults = (props) => {
    return (
        <div className={Styles.SearchResults}>{props.children}</div>
    );
};

export default SearchResults;
