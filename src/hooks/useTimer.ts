import { useState } from 'react';

export const useTimer = (initialTime = 0) => {
  const [time, setTime] = useState(initialTime);
  let timerId: NodeJS.Timeout;

  const stop = () => {
    clearInterval(timerId);
  };

  const start = () => {
    timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return [time, start, stop];
};
