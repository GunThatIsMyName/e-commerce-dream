import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BigButton } from "..";
import { useItemContext } from "../../context/itemContext";
import { exchangeCurrency, sizeList } from "../../utils/helps";

function ItemMain({
  id,
  brand,
  description,
  item,
  price,
  stocks,
  colors,
  sizes,
  image,
}) {
  const { loadToCart } = useItemContext();
  const [selectedSize, setSize] = useState(sizes[0]);
  const navigate = useNavigate();
  const handleBuyBtn = () => {
    if (selectedSize === null) {
      return;
    }
    const cartItem = {
      selectedSize,
      image,
      brand,
      item,
      price,
      description,
      id,
    };
    loadToCart(cartItem);
    navigate("/cart");
  };

  return (
    <Wrapper className="item__main">
      <div className="item__info">
        <h3 className="item__title">{brand}</h3>
        <p className="item__text">{item}</p>
        <p className="item__desc">{description}</p>
      </div>

      <div className="item__price">
        <h3>최근 거래가</h3>
        <h4>{exchangeCurrency(price)} 원</h4>
      </div>

      <div className="item__sizes">
        <h5>사이즈</h5>
        {sizeList.map((size) => {
          const sizeCheck = sizes.includes(size);
          return (
            <button
              onClick={() => setSize(size)}
              key={size}
              className={selectedSize === size ? "active" : null}
              disabled={!sizeCheck}
              style={{
                cursor: !sizeCheck ? "not-allowed" : "pointer",
                background: !sizeCheck ? "grey" : null,
              }}
            >
              {size}
            </button>
          );
        })}
      </div>

      <div className="item__detail">
        <h5>상품 정보</h5>
        <article className="item__article">
          <div className="item__column">
            <h5>색상</h5>
            {colors.map((color) => (
              <li key={color}>{color}</li>
            ))}
          </div>
          <div className="item__column">
            <h5>재고</h5>
            <div className="item__stock">{stocks}</div>
          </div>
        </article>
      </div>

      <div className="item__link">
        <BigButton price={price} handleBuyBtn={handleBuyBtn} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .item__info {
    margin: 2rem 0;
    .item__title {
      display: inline-block;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 1rem;
      font-size: var(--font-xl);
      letter-spacing: 3px;
      border-bottom: 2px solid var(--color-black);
    }
    .item__text {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .item__desc {
      font-style: italic;
      color: var(--color-grey);
    }
  }
  .item__price {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    h4 {
      font-size: var(--font-xl);
      font-weight: bold;
      font-style: italic;
    }
  }
  .item__sizes {
    border-top: 1px solid var(--color-grey);
    border-bottom: 1px solid var(--color-grey);
    padding: 1rem 0;
    margin-bottom: 1rem;
    h5 {
      margin-bottom: 1rem;
    }
    button {
      padding: 4px;
      margin: 3px;
      font-size: var(--font-l);
      &.active {
        background-color: #ffe694;
      }
    }
  }
  .item__detail {
    border-bottom: 1px solid var(--color-grey);
    padding-bottom: 1rem;
    h5 {
      margin-bottom: 1rem;
    }
    .item__article {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
      .item__column {
        h5 {
          color: var(--color-grey);
          font-style: italic;
        }
        li,
        div {
          font-weight: bold;
          font-size: var(--font-l);
        }
      }
    }
  }
  .item__link {
    cursor: pointer;
    margin: 2rem;
  }
`;

export default ItemMain;
