import { useCallback, useEffect, useRef } from 'react';

const useAnimationFrame = (
  callback: FrameRequestCallback,
  timestamp: number,
  onCancel?: () => void,
) => {
  const requestRef = useRef<number | null>(null);

  const animate = useCallback((): void => {
    callback(timestamp);
    requestRef.current = requestAnimationFrame(animate);
  }, [callback, timestamp]);

  const cancel = useCallback(() => {
    if (requestRef.current === null) {
      return;
    }

    cancelAnimationFrame(requestRef.current);
    requestRef.current = null;
    onCancel?.();
  }, [onCancel]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancel();
    };
  }, [animate, cancel]);

  return cancel;
};

export default useAnimationFrame;
