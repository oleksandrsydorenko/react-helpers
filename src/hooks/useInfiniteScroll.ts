import { useCallback, useEffect, useState } from 'react';

const useInfiniteScroll = (
  threshold: number = 300,
  callback: () => void,
): void => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleScroll = useCallback((): void => {
    const visibleHeight =
      window.innerHeight + document.documentElement.scrollTop;
    const requiredHeight = document.documentElement.offsetHeight - threshold;

    if (visibleHeight < requiredHeight || isFetching) {
      return;
    }

    setIsFetching(true);
  }, [isFetching, threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) {
      return;
    }

    callback();
    setIsFetching(false);
  }, [isFetching, callback]);
};

export default useInfiniteScroll;
