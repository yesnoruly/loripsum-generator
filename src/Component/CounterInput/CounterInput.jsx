import React from 'react';
//Styles
import './CounterInput.scss';

export const CounterInput = ({inputType = "text", min = 1, max = "", step = 1, labelText = "Paragraph:"}) => {
    return (
        <>
            <label className="counter-label" htmlFor="counter-input">{labelText}</label>
            <input className="counter-input"
                   step={step}
                   min={min}
                   max={max}
                   type={inputType}
                   id="counter-input"
            />
        </>
    )
}