import React from "react";
import styled from "styled-components";

const adImg= "image/ad.jpeg";


function ShopAd() {
  return <Wrapper bg={adImg} >
    <div className="ad__box">
    <h1 className="ad__title">Sneakers</h1>
    <p>On Yello, Nike sneaker you want is always available and authentic. Buy and sell new sneakers & shoes from Air Jordan, Nike and more!</p>
    </div>
  </Wrapper>;
}

const Wrapper = styled.section`
margin-bottom:2rem;
  background: url(${props=>props.bg} );
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  .ad__box{
    padding:2rem 4rem;
    max-width:400px;
    .ad__title{
      font-size:var(--font-xxxl);
      font-weight:bold;
      text-transform:uppercase;
      margin-bottom:2rem;
    }
    p{
      line-height:1.5rem;
    }
  }
  @media screen and (max-width:768px){
    background: var(--color-ligthgrey);
    .ad__box{
      padding:2rem 1rem;
      .ad__title{
        font-size:var(--font-xxl);
        margin-bottom:1rem;
      }
    }
  }
`;

export default ShopAd;
