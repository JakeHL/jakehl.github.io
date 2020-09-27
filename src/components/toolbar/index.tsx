import React from 'react';
import Theme from '../../theme';
import styled, { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

type ToolBaritemProps = { text: string; href: string; icon: string };

const ToolBarItemStyled = styled.div`
  display: flex;
`;

const ToolBaritem = ({ text, href, icon }: ToolBaritemProps) => {
  return (
    <ToolBarItemStyled>
      <FontAwesomeIcon icon={['fas', 'coffee']} />
      <a href={href}>{text}</a>
    </ToolBarItemStyled>
  );
};

const ToolBarOuter = styled.div`
  margin: 20px;
  padding: 15px;
  border-radius: 10px;

  background: ${Theme.Colors.mainYellow};
  color: ${Theme.Colors.black};
`;

const ToolBar: React.FC = ({ children }) => (
  <ToolBarOuter>{children}</ToolBarOuter>
);

export { ToolBaritem };
export default ToolBar;
