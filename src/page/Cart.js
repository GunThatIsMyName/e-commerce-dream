import React from "react";
import styled from "styled-components";
import { CartCalc, CartItem, EmptyCart, ShopAd } from "../components";

import { useItemContext } from "../context/itemContext";

function Cart() {
  const { cart, deleteCartItem } = useItemContext();

  return (
    <Wrapper>
      <ShopAd />
      <h1 className="cart__title">쇼핑 목록</h1>  
      
      {/* Empty Cart */}
      {cart.length < 1 && <EmptyCart />}

      {/* Cart item */}
      {cart.length >= 1 && (
        <>
          <main className="cart__box">
            {cart.map((cartItem) => {
              return (
                <CartItem key={cartItem.id} {...cartItem} deleteCartItem={deleteCartItem} />
              );
            })}
          </main>
          <CartCalc cart={cart} />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 60vh;
  margin: auto;
  max-width: 1200px;
  padding: 0 2rem;
  .cart__title {
    font-size: var(--font-xl);
    font-weight: bold;
    padding-bottom: 1rem;
    border-bottom: 3px solid black;
  }
  .cart__box {
    padding: 2rem 0;
  }
`;

export default Cart;
