import React from 'react';
//Styles
import './Paragraph.scss';

export const Paragraph = ({paragraphContent, paragraphClassName}) => {

    const className = `paragraph ${paragraphClassName || ""}`

    return (
        <p className={className}>{paragraphContent}</p>
    )
}