import React from 'react';

import s from './style.module.css'

export const Paragraph = ({ children }) => (
  <p className={s.paragraph}>{children}</p>
);
