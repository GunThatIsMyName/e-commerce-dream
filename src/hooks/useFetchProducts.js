import React, { useEffect, useState } from 'react'
import { getPriceInfo, getUniqueName } from '../utils/helps';


// 앱이 켜질때 구동하는 fetch 함수
// 모든 데이터를 받아와서 저장 한다. 

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
    },[])

    return {error,products,isLoading}
}

export default useFetchProducts
