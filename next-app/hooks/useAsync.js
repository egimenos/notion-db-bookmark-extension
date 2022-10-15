import { useState, useEffect, useCallback } from "react";

const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [args, setArgs] = useState([]);

  const execute = useCallback(
    (...args) => {
      setArgs(...args);
      setStatus("pending");
      setData(null);
      setError(null);

      return asyncFunction(...args)
        .then((response) => {
          setData(response);
          setStatus("success");
        })
        .catch((error) => {
          setError(error);
          setStatus("error");
        });
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate, args]);

  return { execute, status, data, error };
};

export default useAsync;
