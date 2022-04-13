import React from 'react';
import Styles from './BookModal.module.scss';
import ExitIcon from '../../exit-icon.svg';

export const BookModal = (props) => {
    return (
        <>
            <div
                className={Styles.BookModal}
                id="BookInformationDialog"
                aria-role="dialog"
            >
                <h2>{props.book.title}</h2>

                <img
                    src={ExitIcon}
                    alt="Exit Icon"
                    aria-label="Exit Dialog"
                    aria-controls="BookInformationDialog"
                    className={Styles.ExitIcon}
                    onClick={props.modalUnmount}
                />

                <p>
                    <em>{props.book.subtitle}</em>
                </p>

                <p>
                    <b>{props.book.authors}</b>
                </p>
                <p>{props.book.description}</p>
                {props.book.categories?.map((item) => {
                    return <p>{item}</p>;
                })}
                <p>{props.book.pageCount} pages</p>
                <p>Publisher: {props.book.publisher}</p>
            </div>
            <div className={Styles.BookModalBackground}></div>
        </>
    );
};
