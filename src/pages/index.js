/* eslint-disable import/no-anonymous-default-export */
// Libs
import React, { useState, useEffect } from "react";
import { graphql, StaticQuery } from "gatsby";
import flatten from "lodash.flatten";
import styled from "styled-components";
// import { StaticImage } from 'gatsby-plugin-image';

// Components
import Layout from "components/layout";
import SEO from "components/seo";
import { device } from "components/device";

// Styles
const GridContainer = styled.div`
  padding: ${({ isDesktop }) => !isDesktop && "20px"};
  display: ${({ isDesktop }) => (isDesktop ? "grid" : "flex")};
  flex-direction: ${({ isDesktop }) => !isDesktop && "column"};
  grid-template-columns: ${({ isDesktop }) =>
    isDesktop && "auto repeat(12, 70px) auto"};
  column-gap: ${({ isDesktop }) => isDesktop && "30px"};
`;

const Part = styled.div`
  grid-column: ${(props) => props.gridColumn};
`;

const Teste = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 70%;
  }

  @media ${device.mobile} {
    width: 30%;
  }
`;

const getMarkdown = (page, fragmentId, isMarkdown = false, assets = false) => {
  const { fragments } = page[0];
  const findFragment = fragments.find((item) => item.id === fragmentId);

  if (isMarkdown) {
    const { markdown } = flatten(findFragment.localizations)[0];
    return markdown;
  } else if (assets) {
    return findFragment.assetpicker;
  } else {
    return flatten(findFragment.localizations);
  }
};

const renderPage = (page, { isDesktop }) => (
  <GridContainer isDesktop={isDesktop}>
    <Part gridColumn={"2 / -2"}>
      <div>
        {/* dado 1 */}
        {getMarkdown(page, "ckaippmyg0e2e0179awvtehcd", true)}
      </div>
      <Teste>
        {/* dado 2 */}
        {getMarkdown(page, "ckaiq6mu80e5v0177avyyr0px", true)}
      </Teste>
      {/* <StaticImage src="images/gatsby-astronaut.png" width={400} formats: [AUTO, WEBP] /> */}
    </Part>
  </GridContainer>
);

const Home = ({ page }) => {
  const [isDesktop, setDesktop] = useState(true);

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 1024);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 1024);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }
  });

  // const seoLocalizations = page[0]?.seo || page[0]?.seo?.localizations?.[0];

  // const getImage = getMarkdown(page, 'ckgi8sxd409d40a74q3b01itu', false, true);

  return (
    <Layout>
      <SEO
        title="Home"
        // title={seoLocalizations?.metaTitle || '-'}
        // description={seoLocalizations?.metaDescription || '-'}
        // image={
        //   `https://media.graphcms.com/${getImage && getImage.handle}` || '-'
        // }
      />
      {renderPage(page, isDesktop)}
    </Layout>
  );
};

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          gcms {
            site(where: { id: "ckaincxko0dlj01791ybj6ww5" }) {
              pages(where: { id: "ckainmsig0dnu0172uvh0tapv" }) {
                fragments {
                  id
                  markdown
                  singletexts
                  localizations {
                    markdown
                    singletexts
                    assetpicker {
                      width
                      height
                      handle
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(response) => {
        return <Home page={response.gcms.site.pages} />;
      }}
    />
  );
};
