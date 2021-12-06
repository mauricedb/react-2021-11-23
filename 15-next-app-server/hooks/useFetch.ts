import { useEffect, useState } from 'react';

export function useFetch<T>(input: RequestInfo, init?: RequestInit) {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    async function executeFetch() {
      try {
        setData(undefined);
        setError(undefined);

        const rsp = await fetch(input, init);
        if (rsp.ok) {
          const data = await rsp.json();

          setData(data);
        } else {
          setError(new Error(rsp.statusText));
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Unkown error when fetching data'));
        }
      }
    }

    executeFetch();
  }, [init, input]);

  return {
    data,
    error,
  };
}
