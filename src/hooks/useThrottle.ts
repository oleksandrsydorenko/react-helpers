import { useEffect, useState } from 'react';

const useThrottle = <T>(
  value: T,
  delay: number,
  onThrottle: (throttledValue: T) => void,
) => {
  const [lastValue, setLastValue] = useState<T>(value);

  useEffect(() => {
    if (value !== lastValue) {
      setLastValue(value);

      const timerId = setTimeout(() => {
        onThrottle(value);
      }, delay);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [delay, lastValue, value, onThrottle]);
};

export default useThrottle;
