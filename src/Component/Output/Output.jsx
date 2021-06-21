import React from 'react';
//Styles
import './Output.scss';

export const Output = ({children, className}) => {

    return (
        <section className={`output ${className || ""}`}>
            {children}
        </section>
    )
}