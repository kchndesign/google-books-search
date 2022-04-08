import React from 'react';
import Styles from './Search.module.scss';
import SearchIcon from '../../search-icon.svg';

const Search = (props) => {
    return (
        <form
            onSubmit={props.handleSearchSubmit}
            className={Styles.Search}
        >
            <label htmlFor="search" className={Styles.Search__label}>
                Search Books
            </label>
            <input
                type="text"
                onChange={props.handleSearchChange}
                value={props.search}
                className={Styles.Search__input}
            />

            <button type="submit" className={Styles.Search__submit}>
                <img src={SearchIcon} alt="Submit search" />
            </button>
        </form>
    );
};

export default Search;
