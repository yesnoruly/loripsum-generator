import React from 'react';
// Assets
import dark from './assets/Dark.svg';
import light from './assets/Light.svg';
// Styles
import s from './style.module.css';

export const ThemeSwitch = ({
  state,
  handleClick,
}) => (
  <button className={s.button} type="button" onClick={handleClick}>
    <img src={state ? dark : light} alt="" width="30" height="30" />
  </button>
);
