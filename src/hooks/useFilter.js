import React, { useEffect, useState } from "react";

const useFilter = (data) => {
  const filterObj = {models: "all", colors: "all", prices: 0 };
  const [filteredProducts, setFilterProducts] = useState(data);
  const [filter, setFilter] = useState(filterObj);

  const resetFilter = () => setFilter(filterObj);

  const updateFilter = () => {
    let tempProducts = [...data];
    const { models, colors, prices } = filter;

    if (models !== "all") {
      tempProducts = tempProducts.filter((item) => item.brand === models);
    }
    if (colors !== "all") {
      tempProducts = tempProducts.filter((item) =>
        item.colors.find((color) => color === colors)
      );
    }
    if(parseInt(prices)!==0){
        tempProducts = tempProducts.filter(item=>item.price <prices)
    }

    setFilterProducts(tempProducts);
  };

  useEffect(() => {
    setFilterProducts(data);
  }, [data]);
  // filter removed

  useEffect(() => {
    updateFilter();
  }, [filter]);

  console.log(filteredProducts, "2");

  return { filteredProducts, filter, setFilter, resetFilter };
};

export default useFilter;
