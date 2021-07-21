import React from 'react';
import './InputTNumber.scss'

export const InputTNumber = ({onChange, value, labelText, min, max}) => {
    return (
        <label className={`counter-label`}>
            {labelText}
            <input className="counter-input"
                   min={min}
                   max={max}
                   step="1"
                   type="number"
                   onChange={onChange}
                   value={value}
            />
        </label>
    )
}