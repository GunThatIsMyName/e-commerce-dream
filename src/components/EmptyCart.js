import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function EmptyCart() {
    return (
        <Wrapper>
            <h1>장바구니에 상품이 없습니다.</h1>
            <div className="cart__icon">
            <Link to="/shop">쇼핑 하러 가기.</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height:40vh;
    text-align:center;
    margin:7rem auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    max-width:1200px;
    h1{
        font-size:2rem;
        margin-bottom:2rem;
    }
    .cart__icon{
        display:flex;
        justify-content:center;
        a{
            border:1px solid var(--color-grey);
            padding:8px 14px;
            border-radius:10px;
            &:hover{
                background-color:var(--color-grey);
            }
        }
    }
`;

export default EmptyCart
