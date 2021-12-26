import React from "react";
import styled from "styled-components";
import { BigButton } from ".";

function CartItem({
  id,
  image,
  item,
  brand,
  description,
  selectedSize,
  price,
  deleteCartItem,
}) {
  return (
    <CartItemWrapper key={id} className="cart__item">
      <div className="cart__item__info">
        <img src={image} alt={item} />
        <div className="item__info">
          <div className="item__info__header">
            <h3 className="info__title">{brand}</h3>
            <p className="info__desc">{description}</p>
          </div>
          <h4 className="info__size">사이즈 : {selectedSize}</h4>
        </div>
      </div>
      <div className="cart__item__buy">
        <div className="cart__item__icons">
          <BigButton price={price} />
          <h4 onClick={() => deleteCartItem(id)} className="remove__Btn">
            삭제
          </h4>
        </div>
      </div>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  &:not(:last-child) {
    border-bottom: 1px dotted var(--color-black);
  }
  .cart__item__info {
    display: flex;
    img {
      width: 13rem;
      height: 10rem;
      object-fit: cover;
      background-color: var(--color-skin);
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
      border-radius: 5px;
      margin-right: 2rem;
      cursor: pointer;
      &:hover {
        transform: scale(0.99);
      }
    }
    .item__info {
      display: flex;
      margin: 1rem;
      flex-direction: column;
      justify-content: space-between;
      .info__title {
        font-weight: bold;
        width: fit-content;
        margin-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-black);
      }
      .info__size {
        font-weight: bold;
      }
    }
  }
  .cart__item__buy {
    margin-left: auto;
    .cart__item__icons {
      display: flex;
      flex-direction: column;
      .remove__Btn {
        width: fit-content;
        margin-left: auto;
        cursor: pointer;
        border-bottom: 1px solid var(--color-black);
        &:hover {
          font-weight: bold;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    .cart__item__info {
      img {
        width: 60%;
        max-width: 200px;
        height: 100px;
      }
      .item__info {
        margin: 0;
      }
      margin-bottom: 2rem;
    }
  }
`;

export default CartItem;
