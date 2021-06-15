import React from 'react';
//Styles
import './HeadTitle.scss';

export const HeadTitle = ({titleClassName, titleText}) => {

    const className = `title ${titleClassName || ""}`

    return (
        <h2 className={className}>{titleText}</h2>
    )
}