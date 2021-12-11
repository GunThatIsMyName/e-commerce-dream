import React from "react";
import styled from "styled-components";
import { Filter, Products, ShopAd } from "../components";

function Shop() {
  return (
    <Wrapper>
      <ShopAd />
      <div className="shop__section">
        <Filter />
        <Products />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  max-width: 1200px;
  margin: auto;
  .shop__section{
      display:grid;
      grid-template-columns:auto 1fr;
      grid-gap:2rem;
  }
  @media screen and (max-width:991px){
      .shop__section{
          display:block;
      }
  }
`;

export default Shop;
