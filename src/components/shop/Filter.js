import React from "react";
import styled from "styled-components";

const Filter = () => {
  return (
    <Wrapper>
      <div className="filter__row">
        <h5>전체 삭제</h5>
        <button>Clear All</button>
      </div>
      <div className="filter__row">
        <h5>모델</h5>
        <button>All</button>
        <button>All</button>
        <button>All</button>
      </div>
      <div className="filter__row">
        <h5>색상</h5>
        <button>All</button>
        <button>red</button>
        <button>black</button>
        <button>white</button>
      </div>
      <div className="filter__row">
        <h5>가격</h5>
        <button>모든 가격</button>
        <button>10만원 이상 이하</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form``;

export default Filter;
