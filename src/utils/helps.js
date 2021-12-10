export const getUniqueName = (data,name)=>{
    let category = data.map(item=>item[name]);
    if(name==="colors"){
        category = category.flat();
    }
    return ["all",...new Set(category)]
}

export const priceList = [
    {id:1,text:"20만원 이하",value:200000},
    {id:2,text:"100만원 이하",value:1000000},
    {id:3,text:"300만원 이하",value:3000000},
    {id:4,text:"모든 제품",value:0},
]