import React from "react";
import styled from "styled-components";
import { exchangeCurrency } from "../utils/helps";

function CartCalc({ cart }) {
  
    const totalPrice = () => {
    return cart.reduce((total, curr) => {
      return total + curr.price;
    }, 0);
  };

  return (
    <Wrapper className="cart__calc">
      <h1 className="calc__title">쇼핑 목록 합계</h1>
      <div className="calc__box">
        <h2>총 수량 : {cart.length}</h2>
        <h3 className="calc__price">총 가격 : {exchangeCurrency(totalPrice())} 원 </h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`

`;

export default CartCalc;
