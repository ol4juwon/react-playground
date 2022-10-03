import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fetchData();
  }, [url]);

  return { data, isLoading };
};
