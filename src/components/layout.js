// Libs
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Components
import Header from "./header";
import Footer from "./footer";
import { device } from "./device";

// Styles
import "./layout.css";

// HD - HEADER
// FT - FOOTER
// CTT - CONTENT

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: auto repeat(12, 70px) auto;
  column-gap: 30px;
  justify-content: center;

  grid-template-areas:
    "HD HD HD HD HD HD HD HD HD HD HD HD HD HD"
    "CTT CTT CTT CTT CTT CTT CTT CTT CTT CTT CTT CTT CTT CTT"
    ". FT FT FT FT FT FT FT FT FT FT FT FT .";
  overflow: hidden;

  @media ${device.laptop} {
    display: block;
    overflow-x: hidden;
  }
`;

const Main = styled.main`
  grid-area: CTT;

  @media ${device.laptop} {
    display: block;
  }
`;

const Layout = ({ children }) => {
  return (
    <ContainerGrid>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ContainerGrid>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
