import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import Shoes from "../Shoes";

function Main() {
  const { error, isLoading, products } = useAppContext();
  console.log(products);
  const mainShoes = products.slice(0, 4);

  // 에러 있을경우
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

      {!isLoading && (
        <div className="main__display">
          {mainShoes &&
            mainShoes.map((item) => <Shoes key={item.id} {...item} />)}
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 60vh;
`;

export default Main;
