import { useEffect, useState } from 'react';

const useHover = (element: HTMLElement) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!element) {
      return;
    }

    const onMouseOver = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    element.addEventListener('mouseenter', onMouseOver);
    element.addEventListener('mousemove', onMouseOver);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', onMouseOver);
      element.removeEventListener('mousemove', onMouseOver);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [element, setIsHovering]);

  return isHovering;
};

export default useHover;
