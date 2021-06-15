import React from 'react';
//Styles
import './HeadTitle.scss';

export const HeadTitle = ({titleClassName, content}) => {

    const className = `title ${titleClassName || ""}`

    return (
        <h2 className={className}>{content}</h2>
    )
}