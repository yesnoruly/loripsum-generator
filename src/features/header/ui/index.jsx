import React from 'react';
// Style
import s from './style.module.css';
// Components
import { ThemeSwitch } from '@/shared/ui';
// Hook
import { useDarkTheme } from '@/shared/lib';

export const Header = () => {

  const [dark, toggleDarkMode] = useDarkTheme();

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <header className={s.header}>
      <ThemeSwitch handleClick={handleClick} state={dark} />
    </header>
  )
}
