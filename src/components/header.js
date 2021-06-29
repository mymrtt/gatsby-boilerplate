// Libs
import * as React from "react";
import styled from "styled-components";

// Components
import { device } from "./device";

const HeaderGridArea = styled.div`
  grid-area: HD;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 0.063rem solid #c6c8cc;
  background: #fff;
  z-index: 99;
  background-color: blue;

  @media ${device.laptop} {
    display: flex;
    width: 100%;
  }
`;

const Container = styled.header`
  margin: 0 auto;
  max-width: 1170px;
  height: 7.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  @media ${device.laptop} {
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 4;
  }

  @media ${device.mobile} {
    padding: 1rem;
    height: 6rem;
  }
`;

const Header = () => (
  <HeaderGridArea>
    <Container>
      <p>header</p>
    </Container>
  </HeaderGridArea>
);

export default Header;
