import React from "react";
import styled from "styled-components";
import { styleLists } from "../../utils/helps";

function DailyStyle() {
  return (
    <Wrapper>
      <h1 className="style__title">Daily Styles !!</h1>
      <div className="style__box">
        {styleLists.map((item) => {
          return (
            <div className="style__item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <span>@ {item.name}</span>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 40vh;
  max-width: 1200px;
  margin:2rem auto;
  .style__title {
    font-size: var(--font-xl);
    margin-bottom: 2rem;
    font-weight:bold;
  }
  .style__box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0 2rem;
    grid-gap: 2rem;
    .style__item {
      position: relative;
      img {
        width: 100%;
        border-radius: 10px;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        color: var(--color-white);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .style__title {
      font-size: var(--font-l);
      text-align: center;
    }
    .style__box {
      grid-template-columns: 1fr 1fr;
      .style__item:not(:first-child, :nth-child(2)) {
        display: none;
      }
    }
  }
`;

export default DailyStyle;
