import React from 'react';

import styled from 'styled-components';

import Layout from '../components/Layout';
import { CardColumn, Card } from '../components/Layout/cards';
import Bio from '../components/bio';
import Theme from '../theme';

import Moonpig from '../assets/moonpig.png';
import Rio from '../assets/rio.png';
import Guinness from '../assets/guinness.png';

const StyledH2 = styled.h2`
  color: ${Theme.Colors.white};
  font-family: ${Theme.Fonts.heading};
  font-size: ${Theme.Sizes.fonts.h1MD};
  text-align: center;
  margin: 0;
`;

export default function Home() {
  return (
    <Layout>
      <Bio />
      <StyledH2 id="work">Proffesional Work</StyledH2>
      <CardColumn>
        <Card
          Title="Moonpig"
          Description="Lorem Ipsum"
          BackgroundImage={Moonpig}
        />
        <Card
          Title="Ditto AI"
          Description="Lorem Ipsum"
          BackgroundImage={Rio}
        />
        <Card
          Title="The Guinness Partnership"
          Description="Lorem Ipsum"
          BackgroundImage={Guinness}
        />
      </CardColumn>
    </Layout>
  );
}
