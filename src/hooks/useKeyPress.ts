import { useCallback, useEffect, useState } from 'react';

const useKeyPress = (targetKey: string): boolean => {
  const [isKeyPressed, setKeyPressed] = useState<boolean>(false);

  const handleKeyDown = useCallback(
    ({ key }: KeyboardEvent): void => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey],
  );

  const handleKeyUp = useCallback(
    ({ key }: KeyboardEvent): void => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return isKeyPressed;
};

export default useKeyPress;
