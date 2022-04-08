import { useState } from 'react';
import { PlaceholderImage } from '../Placeholders';
import placeImage from '../../book-placeholder.png';

const BookImage = (props) => {
    const [imageStyles, setImageStyles] = useState({
        placeStyle: {
            display: 'block',
            minWidth: '100px',
        },
        imgStyle: { display: 'none' },
    });

    const handleImageLoaded = () => {
        setImageStyles({
            placeStyle: { display: 'none' },
            imgStyle: { display: 'block' },
        });
    };

    // assume image exists first so we will display the
    // loading placeholder.
    // when fetched and image loads, replace the placeholder
    // with the actual image.
    if (props.book?.imageLinks?.thumbnail != null) {
        return (
            <>
                <PlaceholderImage style={imageStyles.placeStyle} />
                <img
                    src={props.book.imageLinks.thumbnail}
                    alt={props?.book?.title ?? 'Book Image'}
                    style={imageStyles.imgStyle}
                    onLoad={handleImageLoaded}
                />
            </>
        );
    } else {
        return (
            <img
                src={placeImage}
                alt={props?.book?.title ?? 'Book Image'}
            />
        );
    }
};

export default BookImage;
