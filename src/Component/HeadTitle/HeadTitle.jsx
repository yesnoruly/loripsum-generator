import React from 'react';
//Styles
import './HeadTitle.scss';

export const HeadTitle = ({titleClassName}) => {

    const className = `title ${titleClassName || ""}`

    return (
        <h2 className={className}>Tired of boring lorem ipsum?</h2>
    )
}