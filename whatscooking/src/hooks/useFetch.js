import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try{
      const response = await fetch(url,{signal: controller.signal});
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const jsonData = await response.json();
      setData(jsonData);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }catch(err){
      if(err.name === 'AbortError'){
        console.log('fetch aborted');
      }else{
        setError(err.message);
        setIsLoading(false);
      }
    }
    };
    fetchData();
  }, [url]);

  return { data, isLoading };
};
