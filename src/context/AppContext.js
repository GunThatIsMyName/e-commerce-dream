import { createContext, useContext, useEffect } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import { ProductsAPI } from "../utils/Api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const {error,products,isLoading}=useFetchProducts(ProductsAPI);


  return <AppContext.Provider value={{error,products,isLoading}}>
      {children}
      </AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
