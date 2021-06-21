import React from 'react';
//Styles
import './Button.scss';

export const Button = ({className, buttonType, buttonText="Button"}) => {

    return (
        <button className={`generate ${className || ""}`} type={buttonType}>{buttonText}</button>
    )
}