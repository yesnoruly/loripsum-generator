import React from 'react';
// Style
import s from './style.module.css';
// Hook
import { useDarkTheme, ThemeSwitch } from '@/features/switch-theme';

export const Header = () => {
  const [dark, toggleDarkMode] = useDarkTheme();

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <header className={s.header}>
      <ThemeSwitch handleClick={handleClick} isDark={dark} />
    </header>
  );
};
