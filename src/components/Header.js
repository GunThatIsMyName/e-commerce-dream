import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Header() {
    return (
        <Wrapper>
            <Link to="/" >Home</Link>
            <Link to="/shop" >Shop</Link>
            <Link to="/cart" >cart</Link>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    background-color:yellow;
`;



export default Header
