import Styles from './BookBox.module.scss';
import React from 'react';

const BookBox = (props) => {
    return (
        <div className={Styles.BookBox}>
            <h3>{props.book.title}</h3>
            <p>{props.book.subtitle}</p>
            {props.book.authors.map((author, index) => {
                return <p key={index}>{author}</p>;
            })}
        </div>
    );
};

export default BookBox;
