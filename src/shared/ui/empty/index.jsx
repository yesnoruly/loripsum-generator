import React from 'react';

import shmil from './assets/shmil.png';

import s from './style.module.css'

export const Empty = () => (
  <span className={s.empty}>
    <a href="https://t.me/addstickers/ShmelyaTheCat">
      <img
        src={shmil}
        loading="lazy"
        width="250" height="250"
        alt="Just shmil"
      />
    </a>
  </span>
);
