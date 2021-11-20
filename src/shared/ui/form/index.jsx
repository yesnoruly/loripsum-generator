import React from 'react';

import s from './style.module.css';

export const Form = ({ onSubmit, children }) => (
  <form className={s.form} onSubmit={onSubmit}>
    {children}
  </form>
);
