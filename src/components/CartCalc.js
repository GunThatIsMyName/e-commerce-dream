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
        <div className="calc__column">
          <h2>총 수량 : </h2>
          <h3>{cart.length}</h3>
        </div>
        <div className="calc__column">
          <h2>총 가격 :</h2>
          <h3>{exchangeCurrency(totalPrice())} 원 </h3>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  border-top:2px solid var(--color-grey);
  padding:1rem;
  .calc__title{
    text-align:right;
    margin:2rem 0;
    font-weight:bold;
    font-size:1.5rem;
  }
  .calc__box{
    padding:8px 16px;
    border-radius:10px;
    border:1px solid var(--color-grey);
    width:fit-content;
    margin-left:auto;
    .calc__column{
      display:flex;
      font-size:1.3rem;
      justify-content:space-between;
      &:not(:last-child){
        margin-bottom:2rem;
      }
    }
  }
  @media screen and (max-width:768px){
    .calc__title{
      font-size:1.2rem;
    }
    .calc__box{
      .calc__column{
        font-size:1rem;
      }
    }
  }
`;

export default CartCalc;
