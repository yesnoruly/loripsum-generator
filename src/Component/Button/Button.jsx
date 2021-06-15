import React from 'react';
//Styles
import './Button.scss';

export const Button = ({buttonType, buttonClassName, buttonText="Button"}) => {

    const className = `generate ${buttonClassName || ""}`

    return (
        <button className={className} type={buttonType}>{buttonText}</button>
    )
}