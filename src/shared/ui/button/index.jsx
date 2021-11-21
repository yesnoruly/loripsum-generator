import React from 'react';

import s from './style.module.css';

export const Button = ({ type, children }) => (
  /* eslint-disable react/button-has-type */
  <button className={s.button} type={type}>
    {children}
  </button>
);
