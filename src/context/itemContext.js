import { createContext, useContext, useState ,useEffect} from "react";
import useItem from "../hooks/useItem";

const ItemContext = createContext();

const getLocalData =()=>{
    const data = localStorage.getItem("cart");
    if(data){
        return JSON.parse(data);
    }
    return [];
}
getLocalData();


const ItemProvider = ({children})=>{
    const [queryId,setQueryId]=useState(null);
    const {item ,isError,isLoading}=useItem(queryId);
    const [cart,setCart]=useState(getLocalData());

    const handleIdMiddleware=(id)=>{
        setQueryId(id)
    }

    const loadToCart=(data)=>{
        const {brand,description,id,image,item,price,selectedSize}=data;
        let idCheck = cart.find(car=>car.id === id+selectedSize);
        if(idCheck){
            return;
        }
        setCart(prev=>{
            return [...prev,{id:id+selectedSize,brand,description,image,item,price,selectedSize}]
        })
    }
    const deleteCartItem=(id)=>{
        const newCart = cart.filter(item=>item.id !== id);
        setCart(newCart);
    }

    const saveToLocal=()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    useEffect(()=>{
        saveToLocal();
    },[cart])


    return <ItemContext.Provider value={{handleIdMiddleware,item ,isError,isLoading,loadToCart,cart,deleteCartItem}}>
        {children}
    </ItemContext.Provider>
}

export const useItemContext =()=>{
    return useContext(ItemContext);
}

export default ItemProvider;