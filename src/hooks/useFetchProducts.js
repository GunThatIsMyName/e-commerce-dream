import  { useEffect, useState } from 'react'

const useFetchProducts=(apiendPoint)=> {
    const [error,setError]=useState(false);
    const [products,setProducts]=useState([]);
    const [isLoading,setLoading]=useState(false);

    const getData =async()=>{
        setLoading(true);
        setError(false);

        try{
            const response = await fetch(apiendPoint);
            const data = await response.json();
            setProducts(data);
        }catch(error){
            setError(true);
        }
        
        setLoading(false);
    }

    useEffect(()=>{
        getData();
        // eslint-disable-next-line
    },[])

    return {error,products,isLoading}
}

export default useFetchProducts
