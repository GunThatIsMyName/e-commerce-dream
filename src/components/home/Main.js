import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { Loader, Shoes } from "..";
import styled from "styled-components";

function Main() {
  const { error, isLoading, products } = useAppContext();
  const mainShoes = products.slice(0, 4);

  // error handler
  if (error) {
    <Wrapper>
      <p className="main__error">
        신발을 준비중입니다. 다시 방문하여주세요. 죄송합니다.
      </p>
    </Wrapper>;
  }

  return (
    <Wrapper>
      <div className="main__title">
        <h1>오늘의 신발</h1>
        <p>today footwear</p>
      </div>

      {isLoading && <Loader />}

      {!isLoading && (
        <div className="main__display">
          {mainShoes &&
            mainShoes.map((item) => <Shoes key={item.id} {...item} />)}
        </div>
      )}

      <div className="main__btn">
        <Link to="/shop" >
          <button>더보기</button>
        </Link>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 40vh;
  max-width:1200px;
  margin:4rem auto;
  .main__title{
    margin-bottom:2rem;
    text-align:center;
    h1{
      font-size:var(--font-xl);
      font-weight:bold;
      margin-bottom:1rem;
    }
    p{
      font-size:var(--font-l);
      color:var(--color-gry);
    }
  }
  .main__display{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:1rem;
    margin:1rem 2rem 4rem 2rem;
  }
  .main__btn{
    button{
      padding:8px 20px;
      font-size:var(--font-xl);
    }
    text-align:center;
  }
  @media screen and (max-width:991px){
    .main__display{
      grid-template-columns:repeat(2,1fr);
    }
  }
  @media screen and (max-width:768px){
    .main__title{
      text-align:center;
    }
  }
  @media screen and (max-width:550px){
    .main__display{
      grid-template-columns:1fr;
    }
  }
`;

export default Main;
