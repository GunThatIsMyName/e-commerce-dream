import React, { useEffect, useState } from 'react'

const useFilter=(data)=>{
    const filterObj={models:"",colors:"",prices:""}
    const [filteredProducts,setFilterProducts]=useState(data);
    const [filter,setFilter]=useState(filterObj)

    const resetFilter = () =>setFilter(filterObj);



    const updateFilter=()=>{
        let tempProducts = [...filteredProducts];
        const {modles,colors,prices}=filter;


    }

    useEffect(()=>{
        setFilterProducts(data);
    },[data])
    // filter removed

    useEffect(()=>{
        updateFilter()
    },[filter])
    
    // console.log(filter,"2");

    return {filteredProducts,filter,setFilter,resetFilter}
}

export default useFilter
