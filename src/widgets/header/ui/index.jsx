import React from 'react';
// Style
import s from './style.module.css';
// Components
import { ThemeSwitch } from '@/features/dark-mode';
// Hook
import { useDarkTheme } from '@/features/dark-mode';

export const Header = () => {
  const [dark, toggleDarkMode] = useDarkTheme();

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <header className={s.header}>
      <ThemeSwitch handleClick={handleClick} state={dark} />
    </header>
  );
};
