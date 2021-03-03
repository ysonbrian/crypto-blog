import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 유저가 home과 new blog를 반복시에 home에서 불러와야할 fetch 정보를 new blog 컴포넌트가 받는 경우
    // AbortController를 사용하면 방지 가능
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // 중요
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    // 중요
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
