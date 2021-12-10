import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import { priceList } from "../../utils/helps";

const Filter = () => {
  const { models, colors, filter, setFilter,resetFilter } = useAppContext();

  const filterUpdate = (e) => {
    const {id}=e.target.dataset;
    const {name}=e.target;
    setFilter(prev=>{
      return {...prev,[name]:id}
    })
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <div className="filter__row">
        <h5>전체 삭제</h5>
        <button onClick={resetFilter} >Clear All</button>
      </div>
      <div className="filter__row">
        <h5>모델</h5>
        {models.map((item) => {
          return (
            <button onClick={filterUpdate} data-id={item} name="models" key={item}>
              {item}
            </button>
          );
        })}
      </div>
      <div className="filter__row">
        <h5>색상</h5>
        {colors.map((item) => {
          return (
            <button key={item} data-id={item} onClick={filterUpdate} name="colors">
              {item}
            </button>
          );
        })}
      </div>
      <div className="filter__row">
        <h5>가격</h5>
        {priceList.map((item) => {
          return (
            <button key={item.id} data-id={item.value} onClick={filterUpdate} name="prices">
              {item.text}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form``;

export default Filter;
