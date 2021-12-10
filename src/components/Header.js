import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
const logo = "image/yellow2.png";

function Header() {
  const [isNavbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const clickToHome = () => {
    navigate("/");
  };
  return (
    <Wrapper isNavbar={isNavbar}>
      <div className="header__box">
        <div className="header__icons">
          <img
            onClick={clickToHome}
            src={logo}
            alt="logo"
            className="header__img"
          />
          <FaBars onClick={() => setNavbar((prev) => !prev)} />
        </div>
        <ul className="header__list">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">cart</Link>
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  .header__box {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    .header__icons {
      .header__img {
        width: 120px;
        cursor: pointer;
        &:hover {
          transform: scale(1.06);
        }
      }
      svg {
        display: none;
      }
    }
    .header__list {
      font-size: var(--font-l);
      a {
        padding: 8px 16px;
        margin-left: var(--gap-s);
        text-transform: uppercase;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .header__box {
      display: block;
      .header__icons {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg {
          display: block;
          cursor: pointer;
          font-size: var(--font-xxl);
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      .header__list {
        display: ${(props) => (props.isNavbar ? "grid" : "none")};
        a {
          padding: 1rem 0;
          border-bottom:1px solid var(--color-white20);
        }
      }
    }
  }
`;

export default Header;
