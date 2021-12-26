import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import { priceList } from "../../utils/helps";
import "../../styles/filter.css";

const Filter = () => {
  const { models, colors, filter, setFilter, resetFilter } = useAppContext();

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

  const countFilter = () => {
    let count = 0;
    if (filter.models !== "all") {
      count++;
    }
    if (filter.colors !== "all") {
      count++;
    }
    if (filter.prices !== 0) {
      count++;
    }
    return count;
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <div className="filter__header">
        <h3 className="fitler__title">필터</h3>
        <span>{countFilter()}</span>
      </div>
      <div className="filter__box">
        <div className="filter__row">
          <h5>전체 삭제</h5>
          <button className="clear__btn" onClick={resetFilter}>
            Clear All
          </button>
        </div>
        <div className="filter__row">
          <h5>모델</h5>
          <div className="filter__item models__itmes">
            {models.map((item) => {
              return (
                <button
                  className={filter.models === item ? "active" : null}
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
        </div>
        <div className="filter__row">
          <h5>색상</h5>
          <div className="filter__item colors__items">
            {colors.map((item) => {
              return (
                <button
                  className={`color__btn ${
                    filter.colors === item ? "active" : null
                  }`}
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
        </div>
        <div className="filter__row">
          <h5>가격</h5>
          <div className="filter__item price__items">
            {priceList.map((item) => {
              return (
                <button
                  className={`price__btn ${
                    parseInt(filter.prices) === item.value ? "active" : null
                  }`}
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
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  max-width: 300px;
  border-radius:5px;
  padding: 1rem;
  height: fit-content;
  .filter__header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    .fitler__title {
      font-size: var(--font-xl);
      margin-right: 1rem;
    }
    span {
      text-align: center;
      width: 2rem;
      line-height: 2rem;
      height: 2rem;
      display: inline-block;
      background-color: var(--color-black);
      color: var(--color-white);
      border-radius: 50%;
    }
  }
  .filter__row {
    border-bottom: 1px solid var(--color-greyf4);
    margin-bottom: 1rem;
    .clear__btn {
      font-size: var(--font-m);
      margin-bottom: 1rem;
      color: var(--color-white);
      background-color: var(--color-black);
    }
    h5 {
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .filter__item {
      margin-bottom: 1rem;
      button {
        padding: 4px 6px;
        font-size: var(--font-m);
      }
    }
  }
  @media screen and (max-width: 1240px) {
    margin:1rem;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 2rem;
    max-width: none;
    .fitler__title {
      font-size: var(--font-l);
    }
    .filter__box {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .filter__item {
        button {
          font-size: var(--font-m);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .filter__box{
      grid-template-columns: 1fr;
    }
  }
`;

export default Filter;
