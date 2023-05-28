import { useEffect } from 'react';

type UseIntersectionObserverParams = {
  childElement: HTMLElement;
  options: IntersectionObserverInit;
  parentElement: HTMLElement;
  callback: () => void;
};

const useIntersectionObserver = ({ childElement, options, parentElement, callback }: UseIntersectionObserverParams) => {
  useEffect(() => {
    if (!childElement || !parentElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([target]) => {
        if (!target.isIntersecting) {
          return;
        }

        callback();
      },
      {
        root: parentElement,
        rootMargin: '0px',
        threshold: 0,
        ...options,
      },
    );

    observer.observe(childElement);

    return () => {
      observer.disconnect();
    };
  }, [childElement, options, parentElement, callback]);
};

export default useIntersectionObserver;
