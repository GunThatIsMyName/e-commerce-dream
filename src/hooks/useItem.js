import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

function useItem(id) {
    const [item,setItem]=useState(null);
    const [isError,setError]=useState(false);
    const [isLoading,setLoading]=useState(false);

    const getSingleData = async()=>{
        // setLoading(true);
        // try {
            
        // } catch (error) {
            
        // }
    }
    useEffect(()=>{
        getSingleData();
    },[id])


    return {item}
}

export default useItem
