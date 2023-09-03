import { useEffect, useState } from 'react';

const useScrollPosition = (): { x: number; y: number } => {
  const [scrollPosition, setScrollPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const handleScroll = (): void => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
