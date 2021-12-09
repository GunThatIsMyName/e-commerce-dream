import React from 'react'
import styled from 'styled-components';
import { Filter, Products, ShopAd } from '../components';

function Shop() {
    return (
        <Wrapper>
            <ShopAd />
            <Filter />
            <Products />
        </Wrapper>
    )
}

const Wrapper = styled.header`
    background-color:teal;
`;

export default Shop
