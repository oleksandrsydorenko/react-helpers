import { useEffect, useState } from 'react';

type AsyncState<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

const useAsync = <T>(
  asyncFn: () => Promise<T>,
  deps: unknown[] = [],
): AsyncState<T> => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    setState({ data: null, error: null, loading: true });

    asyncFn()
      .then((data) => setState({ data, error: null, loading: false }))
      .catch((error) => setState({ error, data: null, loading: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, asyncFn]);

  return state;
};

export default useAsync;
