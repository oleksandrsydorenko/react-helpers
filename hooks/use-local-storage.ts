import { useEffect, useState } from 'react';

type Value = string | number | boolean | null;

const useLocalStorage = (key: string, initialValue: Value): [Value, (value: Value) => void] => {
  const [storedValue, setStoredValue] = useState<Value>(() => {
    const item = window.localStorage.getItem(key);

    try {
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('useLocalStorage getItem error', error);

      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('useLocalStorage setItem error', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
