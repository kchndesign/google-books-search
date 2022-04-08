import React from 'react';
import { useState } from 'react';
import { PlaceholderImage } from '../Placeholders';
import placeImage from '../../book-placeholder.png';

const BookImage = (props) => {
    const [imgStyle, setImgStyle] = useState({ display: 'none' });

    const [placeStyle, setPlaceStyle] = useState({
        display: 'block',
    });

    const imageLoads = () => {
        setImgStyle({ display: 'block' });
        setPlaceStyle({ display: 'none' });
    };

    if (props?.book?.imageLinks == null) {
        return <img src={placeImage} alt="" />;
    } else {
        return (
            <>
                <img
                    src={props.book.imageLinks.thumbnail}
                    alt={props.book.title}
                    onLoad={imageLoads}
                    style={imgStyle}
                />
                <PlaceholderImage style={placeStyle} />
            </>
        );
    }
};

export default BookImage;
