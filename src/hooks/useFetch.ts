import { useEffect, useState } from 'react';

type FetchState<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

const useFetch = <T>(url: string, options?: RequestInit): FetchState<T> => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        setState({
          data,
          error: null,
          loading: false,
        });
      } catch (error) {
        setState({
          data: null,
          error: error as Error,
          loading: false,
        });
      }
    };

    fetchData();
  }, [url, options]);

  return state;
};

export default useFetch;
