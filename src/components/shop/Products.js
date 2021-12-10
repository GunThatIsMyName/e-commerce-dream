import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import Shoes from "../Shoes";

function Products() {
  const { error, isLoading, products } = useAppContext();

  return <Wrapper>
      {products.map(item=>{
        return <Shoes key={item.id} {...item} />
      })}
  </Wrapper>;
}

const Wrapper = styled.section`

`;

export default Products;
