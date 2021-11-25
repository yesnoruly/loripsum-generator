import React from 'react';
// Assets
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';

export const ThemeSwitch = ({
  state,
  handleClick
}) => (
  <button onClick={handleClick}>
    <img src={state ? sun : moon} alt="" width="30" height="30" />
  </button>
);
