// Libs
import * as React from "react";
import styled from "styled-components";

// Components
import { device } from "./device";

const Container = styled.footer`
  grid-area: FT;
  width: 100%;
  display: flex;
  justify-content: center;
  background: red;

  @media ${device.laptop} {
    width: auto;
  }

  @media ${device.mobile} {
    min-height: max-content;
    height: max-content;
  }
`;

const Footer = () => (
  <Container>
    <p>footer</p>
  </Container>
);

export default Footer;
