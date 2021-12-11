export const getUniqueName = (data,name)=>{
    let category = data.map(item=>item[name]);
    if(name==="colors"){
        category = category.flat();
    }
    return ["all",...new Set(category)]
}

export const priceList = [
    {id:1,text:"모든 제품",value:0},
    {id:2,text:"20만원 이하",value:200000},
    {id:3,text:"100만원 이하",value:1000000},
    {id:4,text:"300만원 이하",value:3000000},
]

export const styleLists = [
    {id:1,name:"Daniel Adesina",image:"https://images.unsplash.com/photo-1550044679-244888e97e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id:2,name:"Prince Akachi",image:"https://images.unsplash.com/photo-1542062700-9b61ccbc1696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id:3,name:"Brandon Erlinger-Ford",image:"https://images.unsplash.com/photo-1553207660-950fd24795d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id:4,name:"Clarisse Meyer",image:"https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},
    {id:5,name:"Keenan Constance",image:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"},
]

export const exchangeCurrency = (num)=>{
    return new Intl.NumberFormat('kr-KR', { style: 'currency', currency: 'KRW' }).format(num);
}
