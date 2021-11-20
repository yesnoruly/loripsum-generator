import React from 'react';

import copy from './assets/copy.svg';
import checkmark from './assets/checkmark.svg';

import { useCopyClipboard } from './hook';

import s from './styles.module.css';

export const CopyClipboard = ({ data }) => {

  const [isCopied, setCopied] = useCopyClipboard(data, {
    successDuration: 1500
  });

  return (
    <button className={s.button} onClick={setCopied}>
      <img src={isCopied ? checkmark : copy} alt="" />
    </button>
  )
};
