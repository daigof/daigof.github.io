import { useEffect, useState } from "react";

const useApi = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setLoading(false);
        setData(json);
      });
  }, [url]);

  return { loading, data };
};

export default useApi;
