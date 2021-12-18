import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import Shoes from "../Shoes";

function Products() {
  const { error, filteredProducts } = useAppContext();

  const noProduct = filteredProducts.length===0;

  if(noProduct || error){
    return <h1>필터 조건에 맞는 상품이 없습니다.</h1>
  }
  
  return <Wrapper>
      {filteredProducts.map(item=>{
        return <Shoes key={item.id} {...item} />
      })}
  </Wrapper>;
}

const Wrapper = styled.section`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-gap:1rem;
  margin-bottom:3rem;
  @media screen and (max-width:1220px){
    margin:2rem;
    grid-template-columns:repeat(3,1fr);
  }
  @media screen and (max-width:501px){
    margin:2rem 1rem;
    grid-template-columns:repeat(2,1fr);
  }
`;

export default Products;
