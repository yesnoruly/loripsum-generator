import React from 'react';
//Styles
import './HeadTitle.scss';

export const HeadTitle = ({className, titleText}) => {

    return (
        <h2 className={`title ${className || ""}`}>{titleText}</h2>
    )
}