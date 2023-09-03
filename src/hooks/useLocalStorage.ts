import { useEffect, useState } from 'react';

type Value = string | number | boolean | object | null;

const useLocalStorage = (
  key: string,
  initialValue: Value,
): [Value, (value: Value) => void] => {
  const [storedValue, setStoredValue] = useState<Value>(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Retrieving data from localStorage error:', error);

      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Storing data in localStorage error:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
