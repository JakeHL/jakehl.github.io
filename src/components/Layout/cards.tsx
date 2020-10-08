import React from 'react';
import styled from 'styled-components';

import Theme from '../../theme';

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (min-width: ${Theme.Breakpoints.lg}) {
    max-width: 80%;
  }
  @media (min-width: ${Theme.Breakpoints.xl}) {
    max-width: 60%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${Theme.Sizes.padding.article};
  height: 300px;
  border: 1px solid ${Theme.Colors.white};
`;

const CardImage = styled.div<{ bgImage: string }>`
  background: ${Theme.Colors.white};
  background-image: url(${(p) => p.bgImage});
  background-size: cover;
  flex-basis: 40%;
  max-width: 40%;
  height: 100%;
`;

const CardContent = styled.div`
  padding: ${Theme.Sizes.padding.article};
`;

const CardHeading = styled.h3`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Sizes.fonts.subheading};
  margin: 0;
`;

const CardText = styled.p`
  color: ${Theme.Colors.white};
`;

export type CardProps = {
  Title: string;
  Description: string;
  BackgroundImage: string;
};

export const Card = ({ Title, Description, BackgroundImage }: CardProps) => (
  <CardContainer>
    <CardImage bgImage={BackgroundImage} />
    <CardContent>
      <CardHeading>{Title}</CardHeading>
      <CardText>{Description}</CardText>
    </CardContent>
  </CardContainer>
);
