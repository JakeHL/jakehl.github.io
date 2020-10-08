import React from 'react';
import styled, { css } from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import Theme from '../theme';

import me from '../assets/me.png';
import BackgroundShapes from './backgroundShapes';

const BioContainer = styled.div`
  position: relative;
  display: flex;
  color: ${Theme.Colors.white};

  flex-direction: column-reverse;
  @media only screen and (min-width: ${Theme.Breakpoints.lg}) {
    flex-direction: row;
  }

  justify-content: center;
  align-items: center;

  text-align: center;
  @media only screen and (min-width: ${Theme.Breakpoints.lg}) {
    text-align: right;
  }

  padding: ${Theme.Sizes.padding.article};
`;

const BioTitle = styled.h1`
  font-family: ${Theme.Fonts.heading};
  color: ${Theme.Colors.mainYellow};
  @media only screen and (min-width: ${Theme.Breakpoints.md}) {
    font-size: ${Theme.Sizes.fonts.h1MD};
  }
  @media only screen and (min-width: ${Theme.Breakpoints.lg}) {
    font-size: ${Theme.Sizes.fonts.h1LG};
  }
  line-height: 0;
  font-weight: 700;
`;

const BioSubheading = styled.p`
  font-size: ${Theme.Sizes.fonts.subheading};
`;

const BioCopy = styled.div`
  color: ${Theme.Colors.mainLight};
  line-height: 22px;

  a {
    color: ${Theme.Colors.mainYellow};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BioPicture = styled.img`
  max-height: 150px;
  @media only screen and (min-width: ${Theme.Breakpoints.lg}) {
    max-height: 200px;
  }
  margin-left: ${Theme.Sizes.margin.standard};
`;

const bioQuery = graphql`
  query BioQuery {
    markdownRemark(fileAbsolutePath: { regex: "/bio.md/" }) {
      frontmatter {
        title
        name
      }
      html
    }
  }
`;

const FillParent = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const StyledBackground = styled.div`
  ${FillParent}
`;

const BackgroundGradient = styled.div`
  ${FillParent};
  background: linear-gradient(
    0deg,
    ${Theme.Colors.black} 0%,
    rgba(255, 255, 255, 0) 50%
  );
  z-index: 1;
`;

const Background = () => (
  <StyledBackground>
    <BackgroundShapes scaleX={0.2} fill={Theme.Colors.grey} />
    <BackgroundGradient />
  </StyledBackground>
);

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={(data) => {
      const { markdownRemark } = data;
      const { frontmatter, html } = markdownRemark;
      return (
        <BioContainer>
          <Background />
          <div>
            <BioTitle>{frontmatter.name}</BioTitle>
            <BioSubheading>{frontmatter.title}</BioSubheading>
            <BioCopy dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <BioPicture src={me} />
        </BioContainer>
      );
    }}
  />
);

export default Bio;
