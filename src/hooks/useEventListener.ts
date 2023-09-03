import { useEffect } from 'react';

const useEventListener = (
  eventName: string,
  element: HTMLElement | Window = window,
  handler: EventListenerOrEventListenerObject,
): void => {
  useEffect(() => {
    element.addEventListener(eventName, handler);

    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [eventName, handler, element]);
};

export default useEventListener;
