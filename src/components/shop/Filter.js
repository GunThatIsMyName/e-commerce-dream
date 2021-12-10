import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import { priceList } from "../../utils/helps";

const Filter = () => {
  const { models, colors, setFilter, resetFilter } = useAppContext();

  const filterUpdate = (e) => {
    let value = e.target.dataset.id;
    const { name } = e.target;

    if (name === "search") {
      value = e.target.value;
    }

    setFilter((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <h3 className="fitler__title">필터</h3>
      <div className="filter__row">
        <h5>전체 삭제</h5>
        <button onClick={resetFilter}>Clear All</button>
      </div>
      <div className="filter__row">
        <h5>모델</h5>
        {models.map((item) => {
          return (
            <button
              onClick={filterUpdate}
              data-id={item}
              name="models"
              key={item}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="filter__row">
        <h5>색상</h5>
        {colors.map((item) => {
          return (
            <button
              key={item}
              data-id={item}
              onClick={filterUpdate}
              name="colors"
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="filter__row">
        <h5>가격</h5>
        {priceList.map((item) => {
          return (
            <button
              key={item.id}
              data-id={item.value}
              onClick={filterUpdate}
              name="prices"
            >
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
