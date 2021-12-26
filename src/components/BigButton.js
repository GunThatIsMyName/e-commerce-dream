import React from "react";
import styled from "styled-components";
import { exchangeCurrency } from "../utils/helps";

function BigButton({ price, handleBuyBtn }) {
  return (
    <Wrapper className="item__btn" onClick={handleBuyBtn && handleBuyBtn}>
      <div className="btn__box">
        <h4 className="item__btn__title">구매</h4>
        <div className="item__btn__price">{exchangeCurrency(price)}원</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--color-yellow);
  display: inline-block;
  border: 1px solid var(--color-black);
  font-size: var(--font-xxl);
  border-radius: 10px;
  color: var(--color-black);
  font-size: var(--font-l);
  border: none;
  margin-bottom: 1rem;
  cursor: pointer;
  .btn__box {
    display: flex;
    align-items: center;
    .item__btn__title {
      padding: 1rem;
      border-right: 1px solid var(--color-black);
    }
    .item__btn__price {
      padding: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    .btn__box {
      .item__btn__price,
      .item__btn__title {
        padding: 10px;
        font-size:var(--font-m);
      }
    }
  }
`;

export default BigButton;
