import Styles from './BookBox.module.scss';
import React from 'react';
import {
    PlaceholderImage,
    PlaceholderTitle,
    PlaceholderText,
} from '../Placeholders';

const BookBox = (props) => {
    // if there are lots of authors, use et al. abbreviation
    // if there are no authors, just ignore it
    // put commas between authors except for the first one
    // TODO: refactor so this is readable :/
    let authors = '';
    if (props?.book?.authors != null) {
        authors =
            props.book.authors.length > 3
                ? `${props.book.authors[0]} et al.`
                : props.book.authors.reduce(
                      (string, author, index) => {
                          return index == 0 ? author : `, ${author}`;
                      },
                      ''
                  );
    }

    // trim description length if its too long
    // 160 characters
    let description = '';
    if (props?.book?.description?.length > 80) {
        description = props.book.description.slice(0, 80) + '...';
    } else {
        description = props?.book?.description;
    }

    if (props.book == null) {
        return (
            <div className={Styles.BookBox}>
                <PlaceholderImage />
                <PlaceholderTitle />
                <PlaceholderText />

                {/* <div className={Styles.BookBox__headerContainer}>
                     <div className={Styles.BookBox__imageContainer}>
                         <PlaceholderImage />
                     </div>
                     <div className={Styles.BookBox__titleContainer}>
                         <PlaceholderTitle />
                         <PlaceholderText />
                     </div>
                 </div> */}
            </div>
        );
    } else {
        return (
            <div
                className={`${Styles.BookBox} ${Styles.BookBox__headerContainer}`}
                key={props.book.id}
                onClick={() => {
                    props.modalMount(props.book);
                }}
            >
                <div className={Styles.BookBox__imageContainer}>
                    {props.children}
                </div>
                <div className={Styles.BookBox__titleContainer}>
                    <h3 className={Styles.BookBox__title}>
                        {props.book.title}
                    </h3>
                    <p className={Styles.BookBox__authors}>
                        {authors}
                    </p>
                    <p className={Styles.BookBox__subtitle}>
                        {props.book.subtitle}
                    </p>

                    <p className={Styles.BookBox__desc}>
                        {description}
                    </p>
                </div>
            </div>
        );
    }
};

export default BookBox;
