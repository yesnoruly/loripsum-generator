import React from 'react';
// Assets
import copy from './assets/copy.svg';
import checkmark from './assets/checkmark.svg';
// Hook
import { useCopyClipboard } from './hook';
// Styles
import s from './styles.module.css';

export const CopyClipboard = ({ data }) => {
  const [isCopied, setCopied] = useCopyClipboard(data, {
    successDuration: 1500,
  });

  return (
    <button type="button" className={s.button} onClick={setCopied}>
      <img src={isCopied ? checkmark : copy} alt="" />
    </button>
  );
};
