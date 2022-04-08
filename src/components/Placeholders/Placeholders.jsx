import React from 'react';
import Styles from './Placeholders.module.scss';

export const PlaceholderText = (props) => {
    return (
        <div
            className={Styles.PlaceholderText}
            style={props.style}
        ></div>
    );
};

export const PlaceholderTitle = (props) => {
    return (
        <div
            className={Styles.PlaceholderTitle}
            style={props.style}
        ></div>
    );
};

export const PlaceholderImage = (props) => {
    return (
        <div
            className={Styles.PlaceholderImage}
            style={props.style}
        ></div>
    );
};
