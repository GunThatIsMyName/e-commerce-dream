import  { useEffect, useState } from "react";
import { getUniqueName } from "../utils/helps";

function useFilterType(products) {
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);

  const handleKey = () => {
    const getModels = getUniqueName(products, "brand");
    const getColors = getUniqueName(products, "colors");
    setModels(getModels);
    setColors(getColors);
  };

  useEffect(() => {
    handleKey();
    // eslint-disable-next-line
  }, [products]);

  return { models, colors };
}

export default useFilterType;
