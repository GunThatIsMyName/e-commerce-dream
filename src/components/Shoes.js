import React from 'react'

function Shoes({id,colors,brand,description,image,price,siezes,stocks,item}) {
    return (
        <div>
            <span>{colors}</span>
            <span>{brand}</span>
            <span>{price}</span>
        </div>
    )
}

export default Shoes
