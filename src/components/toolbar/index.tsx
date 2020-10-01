import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Theme from '../../theme';

type ToolBaritemProps = { text: string; href: string; icon: IconProp };

const ToolBarItemStyled = styled.div`
  display: flex;
`;

const ToolBaritem = ({ text, href, icon }: ToolBaritemProps) => (
  <ToolBarItemStyled>
    <FontAwesomeIcon icon={icon} />
    <a href={href}>{text}</a>
  </ToolBarItemStyled>
);

const ToolBarOuter = styled.div`
  margin: 20px;
  padding: 15px;
  border-radius: 10px;

  background: ${Theme.Colors.mainYellow};
  color: ${Theme.Colors.black};
`;

const ToolBar: React.FC = ({ children }: { children: React.ReactNode }) => (
  <ToolBarOuter>{children}</ToolBarOuter>
);

export { ToolBaritem };
export default ToolBar;
