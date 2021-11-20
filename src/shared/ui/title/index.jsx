import React from 'react';

import s from './style.module.css';

export const Title = ({ children }) => (
  <h2 className={s.title}>{children}</h2>
);
