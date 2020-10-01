import React from 'react';
import styled from 'styled-components';

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

  text-align: center;
  @media only screen and (min-width: ${Theme.Breakpoints.lg}) {
    text-align: right;
  }

  margin: ${Theme.Sizes.margin.article};
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
  margin: ${Theme.Sizes.margin.standard};
`;

const BioText = () => (
  <BioCopy>
    Hi, I'm Jake. A Software Engineer & Graphic designer based in Manchester,
    UK.
    <br />
    Feel free to check out my out my <a href="#">recent work</a> or my{' '}
    <a href="#">portfolio</a>.
    <br />
    If you'd like to hire me you can <a href="#">get in touch</a> or find me on{' '}
    <a href="#">Upwork</a>.
  </BioCopy>
);

const Bio = () => (
  <BioContainer>
    <div>
      <BioTitle>Jake Langford</BioTitle>
      <BioSubheading>Software Engineer & Graphic Designer</BioSubheading>
      <BioText />
    </div>
    <BioPicture src={me} />
  </BioContainer>
);

export default Bio;
