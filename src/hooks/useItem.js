import  { useState, useEffect } from "react";
import { ProductsAPI } from "../utils/Api";

function useItem(id) {
  const [item, setItem] = useState(null);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getSingleData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${ProductsAPI}?id=${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        setError(true);
      }
      
      setLoading(false);
  };


  useEffect(() => {
    if (id !== null) {
      getSingleData();
    }
    // eslint-disable-next-line
  }, [id]);

  return { item, isError, isLoading };
}

export default useItem;
