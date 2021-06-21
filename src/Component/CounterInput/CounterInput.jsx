import React from 'react';
//Styles
import './CounterInput.scss';

export const CounterInput = ({labelText = "Paragraph:", value, onChange}) => {

    return (
        <>
            <label className="counter-label" htmlFor="counter-input">{labelText}</label>
            <input className="counter-input"
                   max="100"
                   min="1"
                   step="1"
                   type="number"
                   id="counter-input"
                   onChange={onChange}
                   value={value}
            />
        </>
    )
}