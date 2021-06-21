import React from 'react';
//Styles
import './Paragraph.scss';

export const Paragraph = ({className, paragraphContent}) => {

    return (
        <p className={`paragraph ${className || ""}`}>{paragraphContent}</p>
    )
}