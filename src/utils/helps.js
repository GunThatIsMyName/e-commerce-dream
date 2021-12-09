export const getUniqueName = (data,name)=>{
    const key = new Set(data.map(item=>item.name));
    return ["all",...key]
}
