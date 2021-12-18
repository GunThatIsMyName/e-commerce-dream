import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const dunk1 = "image/dunk1.png";
const dunk2 = "image/dunk2.png";
const dunk3 = "image/dunk3.png";

function Hero() {
  return (
    <Wrapper>
      
      <div className="hero__img">
        <img src={dunk1} alt="hero-dunk1" />
        <img src={dunk3} alt="hero-dunk3" />
        <img src={dunk2} alt="hero-dunk2" />
      </div>

      <h1 className="hero__title">Nike Dunk </h1>
      <Link to="/shop" >
      <button>지금 거래하기 👉🏼 </button>
      </Link>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 40vh;
  background: #00765e;
  text-align: center;
  padding-top:5rem;
  padding-bottom:2rem;
    .hero__img {
      display: flex;
      justify-content: center;
      margin-bottom:4rem;
      img {
        width: 20%;
        max-width: 300px;
      }
    }
    .hero__title{
      font-size:var(--font-xxl);
      margin-bottom:2rem;
    }
      button{
        border:none;
        background-color:var(--color-black);
        color:var(--color-white);
      }
    @media screen and (max-width:991px){
      background-color:#FFE6D6;
      padding-top:3rem;
      .hero__img{
        margin-bottom:0;
        img{
          width:80%;
          max-width: 400px;
          &:last-child,:first-child{
            display:none;
          }
        }
      }
      .hero__title{
        font-size:var(--font-xl);
      }
      button{
        font-size:var(--font-l);
      }
    }
`;

export default Hero;
