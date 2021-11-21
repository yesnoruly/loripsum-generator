import React from 'react';
// Styles
import s from './style.module.css';

export const InputNumber = ({
  onChange,
  value,
  max,
  min,
  labelText,
}) => (
  <label className={s.label}>
    {labelText}
    <input
      className={s.input}
      onChange={onChange}
      value={value}
      max={max}
      min={min}
      step={1}
      type="number"
    />
  </label>
);
