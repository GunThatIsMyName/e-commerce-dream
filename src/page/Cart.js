import React from "react";
import styled from "styled-components";
import BigButton from "../components/BigButton";
import CartCalc from "../components/CartCalc";
import EmptyCart from "../components/EmptyCart";
import { useItemContext } from "../context/itemContext";

function Cart() {
  const { cart, deleteCartItem } = useItemContext();

  if (cart.length < 1) {
    return <EmptyCart/>;
  }

  return (
    <Wrapper>
      <h1 className="cart__title">쇼핑 목록</h1>
      <main className="cart__box">
        {cart.map((cartItem) => {
          const { id, brand, description, image, item, price, selectedSize } =
            cartItem;
          return (
            <article key={id} className="cart__item">
              <div className="cart__item__info">
                <img src={image} alt={item} />
                <div className="item__info">
                  <div>
                    <h3 className="info__title">{brand}</h3>
                    <p className="info__desc">{description}</p>
                  </div>
                  <h4 className="info__size">사이즈 : {selectedSize}</h4>
                </div>
              </div>
              <div className="cart__item__buy">
                <div className="cart__item__icons">
                  <BigButton price={price} />
                  <h4
                    onClick={() => deleteCartItem(id)}
                    className="remove__Btn"
                  >
                    삭제
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </main>
      <CartCalc cart={cart} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 60vh;
  margin: auto;
  max-width: 1200px;
  padding: 4rem 2rem;
  .cart__title {
    font-size: var(--font-xl);
    font-weight: bold;
    padding-bottom: 1rem;
    border-bottom: 3px solid black;
  }
  .cart__box {
    padding: 2rem 0;
  }
  .cart__item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-bottom: 1rem;
    .cart__item__info {
      display: flex;
      img {
        width: 13rem;
        height: 10rem;
        object-fit: cover;
        background-color: #ffe8f7;
        margin-right: 2rem;
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
  }
  @media screen and (max-width: 658px) {
    padding: 4rem 1rem;
    .cart__item {
      .cart__item__info {
        img {
          width: 8rem;
          height: 6rem;
          margin: 0;
        }
      }
    }
  }
  @media screen and (max-width: 501px) {
    padding: 4rem 0rem;
    .cart__box{
      padding:1rem;
    }
    .cart__item {
      .cart__item__info {
        img {
          width: 5rem;
        }
      }
      .cart__item__buy{
        .cart__item__icons{
          .item__btn__price{
            padding:5px;
          }
        }
      }
    }
  }
`;

export default Cart;
