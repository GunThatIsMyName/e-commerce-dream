import React from "react";
import styled from "styled-components";
import { DailyStyle, Hero, Main } from "../components";


function Home() {

  return (
    <Wrapper>
      <Hero />
      <Main />
      <DailyStyle />
    </Wrapper>
  );
}

const Wrapper = styled.header`
`;


export default Home;
