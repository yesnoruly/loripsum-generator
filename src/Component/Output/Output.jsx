import React from 'react';
//Styles
import './Output.scss';

export const Output = ({children, outputClassName}) => {

    const className = `output ${outputClassName || ""}`

    return (
        <section className={className}>
            {children}
        </section>
    )
}