import Styles from './BookBox.module.scss';
import React from 'react';
import {
    PlaceholderImage,
    PlaceholderTitle,
    PlaceholderText,
} from '../Placeholders';

const BookBox = (props) => {
    if (props.book == null) {
        return (
            <div className={Styles.BookBox}>
                <PlaceholderImage />
                <PlaceholderTitle />
                <PlaceholderText />
            </div>
        );
    } else {
        return (
            <div className={Styles.BookBox} key={props.book.id}>
                {props.children}
                <h3>{props.book.title}</h3>
                <p>{props.book.subtitle}</p>
                {props.book.authors.map((author, index) => {
                    return <p key={index}>{author}</p>;
                })}
            </div>
        );
    }
};

export default BookBox;

// return (
//     <div className={Styles.BookBox}>
//         {if (props.book == null){
//             return (<h3>{props.book.title}</h3>
//             <p>{props.book.subtitle}</p>
//             {props.book.authors.map((author, index) => {
//                 return <p key={index}>{author}</p>;
//             })}   )
//         }}

//         {
//             if (props.book == null) {
//                 return
//             }
//         }
//         <PlaceholderImage />
//         <PlaceholderText />
//         <PlaceholderTitle />
//     </div>
// );
