import { useEffect } from 'react';

const useDebounce = (delay: number, onDebounce: () => void) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onDebounce();
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay, onDebounce]);
};

export default useDebounce;
