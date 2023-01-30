import React from 'react';
// Styles
import s from './style.module.css';

export const ThemeSwitch = ({
  isDark,
  handleClick,
}) => (
  <button className={s.button} type="button" onClick={handleClick} aria-label="Switch theme">
    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={isDark ? "#DDDDDE" : "#063251"}
            d="M0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0C4.4775 0 0 4.4775 0 10ZM1.66667 10C1.66667 5.405 5.405 1.66667 10 1.66667V18.3333C5.405 18.3333 1.66667 14.595 1.66667 10Z" />
    </svg>
  </button>
);
