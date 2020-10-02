import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';

import Theme from '../../theme';

import me from '../../assets/me.png';

const BioContainer = styled.div`
  display: flex;

  flex-direction: column-reverse;
  @media only screen and (min-width: ${Theme.Breakpoints.lg}) {
    flex-direction: row;
  }

  justify-content: center;
  align-items: center;

  color: ${Theme.Colors.white};
  background-color: ${Theme.Colors.black};
  box-shadow: 0px 0px 20px ${Theme.Colors.black};

  text-align: center;
  @media only screen and (min-width: ${Theme.Breakpoints.lg}) {
    text-align: right;
  }

  margin: ${Theme.Sizes.margin.article};
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

const BioCopy = styled.p`
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
  max-height: 200px;
  @media only screen and (min-width: ${Theme.Breakpoints.lg}) {
    max-height: 250px;
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

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={(data) => {
      const { markdownRemark } = data;
      const { frontmatter, html } = markdownRemark;
      return (
        <BioContainer>
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
