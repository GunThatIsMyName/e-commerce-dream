import { createContext, useContext, useState } from "react";
import useItem from "../hooks/useItem";

const ItemContext = createContext();

const ItemProvider = ({children})=>{
    const [queryId,setQueryId]=useState(null);

    const {queryID}=useItem(queryId)

    const getSingleitem=(id)=>{
        console.log("?@@@")
        setQueryId(id)
    }


    return <ItemContext.Provider value={{getSingleitem}}>
        {children}
    </ItemContext.Provider>
}

export const useItemContext =()=>{
    return useContext(ItemContext);
}

export default ItemProvider;