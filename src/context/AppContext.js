import { createContext, useContext } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import useFilter from "../hooks/useFilter";
import useFilterType from "../hooks/useFilterType";
import { ProductsAPI } from "../utils/Api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const {error,products,isLoading}=useFetchProducts(ProductsAPI);
    const {filteredProducts,filter,setFilter,resetFilter} = useFilter(products);
    const {models,colors}=useFilterType(products);

  return <AppContext.Provider value={{error,products,isLoading,models,colors,filter,setFilter,resetFilter,filteredProducts}}>
      {children}
      </AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
