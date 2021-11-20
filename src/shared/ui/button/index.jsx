import React from 'react';

import s from './style.module.css';

export const Button = ({ type, children }) => (
  <button className={s.button} type={type}>
    {children}
  </button>
);
