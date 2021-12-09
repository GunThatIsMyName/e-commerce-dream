import React from "react";
import styled from "styled-components";
import { DailyStyle, Hero, HeroFooter, Main } from "../components";


function Home() {

  return (
    <Wrapper>
      <Hero />
      <Main />
      <DailyStyle />
      <HeroFooter />
    </Wrapper>
  );
}

const Wrapper = styled.header`
    background-color:teal;
`;


export default Home;
