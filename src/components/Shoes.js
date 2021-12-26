import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { exchangeCurrency } from '../utils/helps';

function Shoes({id,colors,brand,description,image,price,siezes,stocks,item}) {
    return (
        <Wrapper>
            <Link to={`/shop/${id}`} >        
            <img src={image} alt={item} />
            <div className="shoe__box">
                <h3 className="shoe__brand">{brand}</h3>
                <p className="shoe__desc">{description}</p>
                <span className="shoe__price">{exchangeCurrency(price)} 원</span>
            </div>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    img{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius:var(--font-s);
        background-color:#F3EADA;
        width:100%;
        margin-bottom:1rem;
        transition:0.1s linear;
        &:hover{
            transform:translateY(-5px);
        }
    }
    .shoe__brand{
        font-size:var(--font-l);
        display:inline-block;
        font-weight:bold;
        padding-bottom:2px;
        border-bottom:1px solid var(--color-black);
        margin-bottom:4px;
    }
    .shoe__desc{
        color:var(--color-grey);
        margin-bottom:4px;
    }
`;

export default Shoes
