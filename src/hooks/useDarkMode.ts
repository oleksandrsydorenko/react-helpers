import { useState } from 'react';

const useDarkMode = (key: string): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const mode = window.localStorage.getItem(key);

      return mode ? JSON.parse(mode) : false;
    } catch (error) {
      console.error('Retrieving data from localStorage error:', error);

      return false;
    }
  });

  const toggleDarkMode = (): void => {
    setIsDarkMode((prev) => {
      const next = !prev;

      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch (error) {
        console.error('Storing data in localStorage error:', error);
      }

      return next;
    });
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
