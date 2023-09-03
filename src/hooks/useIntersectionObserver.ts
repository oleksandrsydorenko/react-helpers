import { useEffect } from 'react';

const useIntersectionObserver = (
  elements: HTMLElement[],
  options: IntersectionObserverInit,
  callback: () => void,
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([target]) => {
      if (!target.isIntersecting) {
        return;
      }

      callback();
    }, options);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [elements, options, callback]);
};

export default useIntersectionObserver;
