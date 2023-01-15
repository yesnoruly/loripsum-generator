import { useState, useEffect } from 'react';

export const useDarkTheme = () => {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return [dark, toggleDarkMode];
};
