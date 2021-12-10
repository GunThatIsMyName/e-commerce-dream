import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <h1>
        @{new Date().getFullYear()}
        <br />
        No Copyright This is Demo
      </h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: var(--color-black);
  color: var(--color-white);
  text-align: center;
  h1 {
    padding: 3rem;
  }
`;

export default Footer;
