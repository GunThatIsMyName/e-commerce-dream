import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import Shoes from "../Shoes";

function Products() {
  const { error, isLoading, filteredProducts } = useAppContext();

  return <Wrapper>
      {filteredProducts.map(item=>{
        return <Shoes key={item.id} {...item} />
      })}
  </Wrapper>;
}

const Wrapper = styled.section`

`;

export default Products;
